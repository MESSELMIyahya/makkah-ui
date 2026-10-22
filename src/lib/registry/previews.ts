export type RegistryPreviewLanguage = "ar" | "en";

/** Example name used for `_preview.tsx` / `_preview-ar.tsx` / `_preview-en.tsx` (the page hero). */
export const defaultRegistryPreviewName = "default";

export type RegistryPreviewFileInfo = {
  name: string;
  language?: RegistryPreviewLanguage;
};

const previewFilePrefix = "_preview";
const previewFileExtension = ".tsx";
const previewNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;

/**
 * Parses preview authoring file names:
 * - `_preview.tsx` → default example, single language
 * - `_preview-ar.tsx` / `_preview-en.tsx` → default example, bilingual
 * - `_preview-<name>.tsx` → named example, single language
 * - `_preview-<name>-ar.tsx` / `_preview-<name>-en.tsx` → named example, bilingual
 */
export function parseRegistryPreviewFileName(fileName: string): RegistryPreviewFileInfo | null {
  if (!fileName.startsWith(previewFilePrefix) || !fileName.endsWith(previewFileExtension)) {
    return null;
  }

  let stem = fileName.slice(previewFilePrefix.length, -previewFileExtension.length);
  let language: RegistryPreviewLanguage | undefined;

  if (stem.endsWith("-ar")) {
    language = "ar";
  } else if (stem.endsWith("-en")) {
    language = "en";
  }

  if (language) {
    stem = stem.slice(0, -3);
  }

  if (stem === "") {
    return { name: defaultRegistryPreviewName, ...(language ? { language } : {}) };
  }

  if (!stem.startsWith("-") || !previewNamePattern.test(stem.slice(1))) {
    return null;
  }

  return { name: stem.slice(1), ...(language ? { language } : {}) };
}

export function isRegistryPreviewFileName(fileName: string): boolean {
  return parseRegistryPreviewFileName(fileName) !== null;
}

/** Matches `<Preview name="..." />` references in registry MDX bodies. */
export const registryPreviewReferencePattern = /<Preview\s+name=["']([^"']+)["']\s*\/>/gu;

export function getRegistryPreviewReferences(source: string): string[] {
  return [...source.matchAll(registryPreviewReferencePattern)].map((match) => match[1] ?? "");
}
