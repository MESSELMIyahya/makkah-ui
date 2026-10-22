import {
  createRegistryCatalogItems,
  hasRegistryPreviewExport,
  type RegistryCatalogItem,
} from "../registry/catalog-builder";
import { getFileName, getParentPath, isInvalidRegistryRelativePath } from "../registry/paths";
import { getRegistryPreviewReferences, isRegistryPreviewFileName } from "../registry/previews";

export type RegistryDiagnosticLevel = "error" | "warning";

export type RegistryDiagnostic = {
  level: RegistryDiagnosticLevel;
  path: string;
  message: string;
};

export type RegistryDiagnostics = {
  errors: RegistryDiagnostic[];
  warnings: RegistryDiagnostic[];
};

export type RegistryDiagnosticsInput = {
  files: Readonly<Record<string, string>>;
};

type RegistryItemParseResult = {
  items: RegistryCatalogItem[];
  errors: RegistryDiagnostic[];
};

const registryItemAuthoringFile = "_registry.mdx";
const ignoredRegistryFileNames = new Set([".DS_Store"]);

export function getRegistryDiagnostics(input: RegistryDiagnosticsInput): RegistryDiagnostics {
  const files = normalizeRegistryFiles(input.files);
  const itemSources = getRegistryItemSources(files);
  const previewSources = getRegistryPreviewSources(files);
  const parseResult = parseRegistryItemSources(itemSources, previewSources);
  const diagnostics: RegistryDiagnostics = {
    errors: parseResult.errors,
    warnings: [],
  };

  diagnostics.errors.push(...getRegistryItemValidationErrors(parseResult.items, files));
  diagnostics.errors.push(...getRegistryPreviewValidationErrors(previewSources));
  diagnostics.errors.push(...getRegistryPreviewReferenceErrors(parseResult.items));
  diagnostics.errors.push(...getDocsValidationErrors(files));
  diagnostics.warnings.push(...getRegistryPreviewLanguageWarnings(parseResult.items));
  diagnostics.warnings.push(...getSuspiciousRegistryFileWarnings(files, parseResult.items));

  diagnostics.errors = sortDiagnostics(diagnostics.errors);
  diagnostics.warnings = sortDiagnostics(diagnostics.warnings);

  return diagnostics;
}

export function getRegistryDoctorExitCode(diagnostics: RegistryDiagnostics): 0 | 1 {
  return diagnostics.errors.length > 0 ? 1 : 0;
}

function normalizeRegistryFiles(files: Readonly<Record<string, string>>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(files).map(([path, source]) => [normalizeRegistryPath(path), source]),
  );
}

function normalizeRegistryPath(path: string): string {
  return path.replace(/\\/gu, "/").replace(/^\/+|\/+$/gu, "");
}

function getRegistryItemSources(files: Readonly<Record<string, string>>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(files).filter(
      ([path]) => path.startsWith("registry/items/") && isRegistryMdx(path),
    ),
  );
}

function getRegistryPreviewSources(
  files: Readonly<Record<string, string>>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(files).filter(
      ([path]) =>
        path.startsWith("registry/items/") && isRegistryPreviewFileName(getFileName(path)),
    ),
  );
}

function parseRegistryItemSources(
  sources: Readonly<Record<string, string>>,
  previewSources: Readonly<Record<string, string>>,
): RegistryItemParseResult {
  const result: RegistryItemParseResult = {
    items: [],
    errors: [],
  };

  for (const [path, source] of Object.entries(sources)) {
    const itemRoot = getParentPath(path);
    const itemPreviewSources = Object.fromEntries(
      Object.entries(previewSources).filter(
        ([previewPath]) => getParentPath(previewPath) === itemRoot,
      ),
    );

    try {
      result.items.push(...createRegistryCatalogItems({ [path]: source }, itemPreviewSources));
    } catch (error) {
      result.errors.push(
        createError(
          path,
          error instanceof Error ? error.message : `Registry item ${path} could not be parsed.`,
        ),
      );
    }
  }

  return result;
}

function getRegistryPreviewValidationErrors(
  previewSources: Readonly<Record<string, string>>,
): RegistryDiagnostic[] {
  return Object.entries(previewSources).flatMap(([path, source]) =>
    hasRegistryPreviewExport(source)
      ? []
      : [createError(path, `Registry preview ${path} must export a named Preview component.`)],
  );
}

function getRegistryPreviewReferenceErrors(
  items: readonly RegistryCatalogItem[],
): RegistryDiagnostic[] {
  return items.flatMap((item) => {
    const previewNames = new Set(item.previews.map((preview) => preview.name));

    return getRegistryPreviewReferences(item.usageSource)
      .filter((name) => !previewNames.has(name))
      .map((name) =>
        createError(
          item.registryMdxFilePath,
          `Registry item "${item.name}" references <Preview name="${name}" /> but has no _preview-${name}*.tsx file.`,
        ),
      );
  });
}

function getRegistryPreviewLanguageWarnings(
  items: readonly RegistryCatalogItem[],
): RegistryDiagnostic[] {
  return items.flatMap((item) =>
    item.previews
      .filter((preview) => (preview.ar === undefined) !== (preview.en === undefined))
      .map((preview) =>
        createWarning(
          (preview.ar ?? preview.en)?.path ?? item.registryMdxFilePath,
          `Registry item "${item.name}" preview "${preview.name}" needs both -ar and -en files for the language switcher.`,
        ),
      ),
  );
}

function getRegistryItemValidationErrors(
  items: readonly RegistryCatalogItem[],
  files: Readonly<Record<string, string>>,
): RegistryDiagnostic[] {
  const errors: RegistryDiagnostic[] = [];
  const seenNames = new Map<string, string>();
  const registryItemNames = new Set(items.map((item) => item.name));

  for (const item of items) {
    const existingPath = seenNames.get(item.name);

    if (existingPath) {
      errors.push(
        createError(
          item.registryMdxFilePath,
          `Duplicate registry item name "${item.name}" also used in ${existingPath}.`,
        ),
      );
    } else {
      seenNames.set(item.name, item.registryMdxFilePath);
    }

    for (const registryDependency of item.registryDependencies ?? []) {
      if (registryItemNames.has(registryDependency)) {
        errors.push(
          createError(
            item.registryMdxFilePath,
            `Registry item "${item.name}" must use a URL for local registry dependency "${registryDependency}".`,
          ),
        );
      }
    }

    for (const file of item.sourceFiles) {
      errors.push(...getRegistryPublishedFileErrors(item, file, files));
    }
  }

  return errors;
}

function getRegistryPublishedFileErrors(
  item: RegistryCatalogItem,
  file: RegistryCatalogItem["sourceFiles"][number],
  files: Readonly<Record<string, string>>,
): RegistryDiagnostic[] {
  const errors: RegistryDiagnostic[] = [];

  if (isInvalidRegistryRelativePath(file.path)) {
    errors.push(
      createError(
        file.path,
        `Registry item "${item.name}" contains an invalid install path: ${file.path}`,
      ),
    );
  }

  if (isInvalidRegistryRelativePath(file.sourcePath)) {
    errors.push(
      createError(
        file.sourcePath,
        `Registry item "${item.name}" contains an invalid source path: ${file.sourcePath}`,
      ),
    );
  } else if (!file.sourcePath.startsWith("registry/items/")) {
    errors.push(
      createError(
        file.sourcePath,
        `Registry item "${item.name}" must publish files from registry/items/: ${file.sourcePath}`,
      ),
    );
  }

  if (getFileName(file.path).startsWith("_")) {
    errors.push(
      createError(
        file.path,
        `Registry item "${item.name}" must not publish registry authoring files.`,
      ),
    );
  }

  if (getFileName(file.sourcePath).startsWith("_")) {
    errors.push(
      createError(
        file.sourcePath,
        `Registry item "${item.name}" must not publish from registry authoring source files: ${file.sourcePath}`,
      ),
    );
  }

  if ((file.type === "registry:file" || file.type === "registry:page") && !file.target) {
    errors.push(
      createError(file.path, `Registry item "${item.name}" file ${file.path} must include target.`),
    );
  }

  if (file.sourcePath.trim().length === 0) {
    errors.push(
      createError(
        file.sourcePath,
        `Registry item "${item.name}" references an unsupported source file type: ${file.sourcePath}`,
      ),
    );
  } else if ((files[file.sourcePath] ?? "").length === 0) {
    errors.push(
      createError(
        file.sourcePath,
        `Registry item "${item.name}" references a missing file: ${file.sourcePath}`,
      ),
    );
  }

  return errors;
}

function getDocsValidationErrors(files: Readonly<Record<string, string>>): RegistryDiagnostic[] {
  return Object.keys(files)
    .filter((path) => path.startsWith("registry/docs/") && /\.(?:md|mdx)$/u.test(path))
    .flatMap((path) => {
      const docsPath = path.replace(/^registry\/docs\//u, "");
      const segments = docsPath.replace(/\.(?:md|mdx)$/u, "").split("/");

      if (segments.some((segment) => !segment || segment.startsWith("_"))) {
        return [];
      }

      if (segments.length > 1) {
        return [
          createError(
            path,
            `Nested docs pages are not supported yet. Move ${path} directly under registry/docs.`,
          ),
        ];
      }

      return [];
    });
}

function getSuspiciousRegistryFileWarnings(
  files: Readonly<Record<string, string>>,
  items: readonly RegistryCatalogItem[],
): RegistryDiagnostic[] {
  const itemRoots = getRegistryItemRoots(files);
  const itemsByRoot = new Map(items.map((item) => [getParentPath(item.registryMdxFilePath), item]));
  const warnings: RegistryDiagnostic[] = [];

  for (const root of itemRoots) {
    const item = itemsByRoot.get(root);
    const rootFiles = Object.keys(files).filter((path) => path.startsWith(`${root}/`));
    const hasRegistryMdx = rootFiles.some((path) => isRegistryMdx(path));
    const hasPublishableLookingFile = rootFiles.some(
      (path) => !isKnownAuthoringOrIgnoredFile(path),
    );

    if (!item && !hasRegistryMdx && hasPublishableLookingFile) {
      warnings.push(
        createWarning(
          root,
          `Registry item folder contains source files but no ${registryItemAuthoringFile}.`,
        ),
      );
      continue;
    }

    if (!item) {
      continue;
    }

    const publishedSourcePaths = new Set(item.sourceFiles.map((file) => file.sourcePath));

    for (const path of rootFiles) {
      if (isKnownAuthoringOrIgnoredFile(path)) {
        continue;
      }

      if (path.trim().length > 0 && !publishedSourcePaths.has(path)) {
        warnings.push(
          createWarning(path, `Registry item "${item.name}" does not publish this source file.`),
        );
        continue;
      }

      if (path.trim().length === 0) {
        warnings.push(
          createWarning(path, `Registry item "${item.name}" ignores unsupported file type.`),
        );
      }
    }
  }

  return warnings;
}

function getRegistryItemRoots(files: Readonly<Record<string, string>>): string[] {
  const roots = new Set<string>();

  for (const path of Object.keys(files)) {
    const segments = path.split("/");

    if (segments[0] === "registry" && segments[1] === "items" && segments.length >= 4) {
      roots.add(segments.slice(0, 4).join("/"));
    }
  }

  return [...roots].toSorted();
}

function isRegistryMdx(path: string): boolean {
  return getFileName(path) === registryItemAuthoringFile;
}

function isKnownAuthoringOrIgnoredFile(path: string): boolean {
  const fileName = getFileName(path);

  return (
    fileName === registryItemAuthoringFile ||
    isRegistryPreviewFileName(fileName) ||
    ignoredRegistryFileNames.has(fileName)
  );
}

function createError(path: string, message: string): RegistryDiagnostic {
  return { level: "error", path, message };
}

function createWarning(path: string, message: string): RegistryDiagnostic {
  return { level: "warning", path, message };
}

function sortDiagnostics(diagnostics: RegistryDiagnostic[]): RegistryDiagnostic[] {
  return diagnostics.toSorted(
    (a, b) =>
      a.path.localeCompare(b.path, "en", { numeric: true }) || a.message.localeCompare(b.message),
  );
}
