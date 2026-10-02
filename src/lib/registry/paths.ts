import type { RegistryFileType } from "./metadata";

const shadcnDefaultTargetSegmentsByFileType: Partial<Record<RegistryFileType, string>> = {
  // Mirrors shadcn's resolveFileTargetDirectory: these file types install
  // through components.json resolved paths when no explicit target is set.
  "registry:block": "components",
  "registry:component": "components",
  "registry:hook": "hooks",
  "registry:lib": "lib",
  "registry:ui": "ui",
};

const shadcnTargetPlaceholdersByFileType: Partial<Record<RegistryFileType, string>> = {
  "registry:block": "@components",
  "registry:component": "@components",
  "registry:hook": "@hooks",
  "registry:lib": "@lib",
  "registry:ui": "@ui",
};

export function getFileName(path: string): string {
  return path.replace(/\\/gu, "/").split("/").at(-1) ?? path;
}

export function getParentPath(path: string): string {
  return path.replace(/\\/gu, "/").split("/").slice(0, -1).join("/");
}

export function normalizePath(segments: readonly string[]): string {
  const normalizedSegments: string[] = [];

  for (const segment of segments) {
    if (segment === "" || segment === ".") {
      continue;
    }

    if (segment === "..") {
      normalizedSegments.pop();
      continue;
    }

    normalizedSegments.push(segment);
  }

  return normalizedSegments.join("/");
}

export function getDefaultRegistryFilePublicPath(fileName: string, type: RegistryFileType): string {
  const targetSegment = getShadcnDefaultTargetSegment(type);

  return targetSegment ? normalizeRegistryRelativePath(`${targetSegment}/${fileName}`) : fileName;
}

export function getRegistryFilePublicPath(file: {
  path: string;
  type: RegistryFileType;
  target?: string;
}): string {
  const path = normalizeRegistryRelativePath(file.path);
  const targetSegment = getShadcnDefaultTargetSegment(file.type);

  if (isInvalidRegistryRelativePath(path)) {
    return path;
  }

  if (!targetSegment || file.target) {
    return path;
  }

  if (path === "" || path.startsWith(`${targetSegment}/`)) {
    return path;
  }

  return getDefaultRegistryFilePublicPath(getFileName(path), file.type);
}

export function getRegistryFileTarget(file: {
  path: string;
  type: RegistryFileType;
  target?: string;
}): string | undefined {
  if (file.target?.trim()) {
    return normalizeRegistryTargetPath(file.target);
  }

  const path = normalizeRegistryRelativePath(file.path);
  const targetSegment = getShadcnDefaultTargetSegment(file.type);
  const targetPlaceholder = getShadcnTargetPlaceholder(file.type);

  if (!targetSegment || !targetPlaceholder || path === "" || isInvalidRegistryRelativePath(path)) {
    return undefined;
  }

  const targetPath = path.startsWith(`${targetSegment}/`)
    ? path.slice(targetSegment.length + 1)
    : getFileName(path);

  return `${targetPlaceholder}/${targetPath}`;
}

export function stripCodeExtension(path: string): string {
  return path.replace(/\.[cm]?[jt]sx?$/u, "");
}

export function normalizeRegistryRelativePath(path: string): string {
  const posixPath = path.replace(/\\/gu, "/");

  return isInvalidRegistryRelativePath(posixPath) ? posixPath : normalizePath(posixPath.split("/"));
}

export function normalizeRegistryTargetPath(path: string): string {
  return path.trim().replace(/\\/gu, "/");
}

export function isInvalidRegistryRelativePath(path: string): boolean {
  const posixPath = path.replace(/\\/gu, "/");

  return (
    posixPath.startsWith("/") || posixPath.startsWith("~") || posixPath.split("/").includes("..")
  );
}

function getShadcnDefaultTargetSegment(type: RegistryFileType): string | undefined {
  return shadcnDefaultTargetSegmentsByFileType[type];
}

function getShadcnTargetPlaceholder(type: RegistryFileType): string | undefined {
  return shadcnTargetPlaceholdersByFileType[type];
}
