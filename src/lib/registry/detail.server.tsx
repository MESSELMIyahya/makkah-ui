import { renderServerComponent } from "@tanstack/react-start/rsc";
import * as React from "react";

import {
  renderMdxContentModule,
  type MdxContentModule,
} from "@/components/docs/mdx-content.server";
import { PreviewCard } from "@/components/docs/preview-card";
import { PropsTable } from "@/components/docs/props-table";

import { normalizeGlobFiles } from "../glob";
import { getRegistryItem } from "./catalog";
import { getRegistryPreviewCodeFile, type RegistryPreviewExample } from "./catalog-builder";
import type { RegistryItemDetailInput } from "./detail.types";
import { getRegistryDisplaySource } from "./display-source.server";
import { highlightCodeToHtml } from "./highlight.server";
import { defaultRegistryPreviewName } from "./previews";
import {
  getRegistryItemWithSources,
  type RegistryCatalogItemWithSources,
  type RegistrySourceFileWithSource,
} from "./source.server";

type RenderedUsage = Awaited<ReturnType<typeof renderUsage>>;
type RenderedPreview = Awaited<ReturnType<typeof renderPreview>>;
type RegistryPreviewModule = React.ComponentType;

type LoadedPreviewExample = {
  name: string;
  ar?: RegistryPreviewModule;
  en?: RegistryPreviewModule;
  single?: RegistryPreviewModule;
  code: string;
  highlightedHtml: string;
};

const registryUsageModules = import.meta.glob<MdxContentModule>(
  "../../../registry/items/**/_registry.mdx",
);
const registryPreviewModules = import.meta.glob<RegistryPreviewModule>(
  "../../../registry/items/**/_preview*.tsx",
  {
    import: "Preview",
  },
);

const registryUsageModulesByPath = normalizeGlobFiles(registryUsageModules);
const registryPreviewModulesByPath = normalizeGlobFiles(registryPreviewModules);

export type HighlightedRegistrySourceFile = RegistrySourceFileWithSource & {
  highlightedHtml: string;
};

export type RegistryItemDetail = Omit<
  RegistryCatalogItemWithSources,
  | "hasUsage"
  | "previewSourceFile"
  | "previews"
  | "registryMdxFilePath"
  | "sourceFiles"
  | "usageSource"
> & {
  preview?: RenderedPreview;
  sourceFiles: HighlightedRegistrySourceFile[];
  usage?: RenderedUsage;
};

export async function getRegistryItemDetailData(data: RegistryItemDetailInput) {
  const item = getRegistryItem(data.name);

  if (!item) {
    return {
      name: data.name,
      item: null,
    };
  }

  return {
    name: data.name,
    item: await highlightRegistryItem(getRegistryItemWithSources(item)),
  };
}

async function highlightRegistryItem(
  item: RegistryCatalogItemWithSources,
): Promise<RegistryItemDetail> {
  const {
    hasPreview,
    hasUsage,
    previewSourceFile: _previewSourceFile,
    previews: _previews,
    usageSource: _usageSource,
    ...itemWithoutUsageFlag
  } = item;
  const [examples, sourceFiles] = await Promise.all([
    loadPreviewExamples(item),
    Promise.all(item.sourceFiles.map((file) => highlightSourceFile(item, file))),
  ]);
  const defaultExample = examples.get(defaultRegistryPreviewName);
  const [preview, usage] = await Promise.all([
    hasPreview && defaultExample ? renderPreview(defaultExample) : null,
    renderUsage(item.registryMdxFilePath, hasUsage, examples),
  ]);

  return {
    ...itemWithoutUsageFlag,
    hasPreview,
    ...(preview ? { preview } : {}),
    sourceFiles,
    ...(usage ? { usage } : {}),
  };
}

async function loadPreviewExamples(
  item: RegistryCatalogItemWithSources,
): Promise<Map<string, LoadedPreviewExample>> {
  const examples = await Promise.all(
    item.previews.map((example) => loadPreviewExample(item, example)),
  );

  return new Map(examples.map((example) => [example.name, example]));
}

async function loadPreviewExample(
  item: RegistryCatalogItemWithSources,
  example: RegistryPreviewExample,
): Promise<LoadedPreviewExample> {
  const codeFile = getRegistryPreviewCodeFile(example);
  const code = codeFile ? getRegistryDisplaySource(item, codeFile) : "";
  const [ar, en, single, highlightedHtml] = await Promise.all([
    loadPreviewModule(example.ar?.path),
    loadPreviewModule(example.en?.path),
    loadPreviewModule(example.single?.path),
    highlightCodeToHtml(code, "preview.tsx"),
  ]);

  return {
    name: example.name,
    ...(ar ? { ar } : {}),
    ...(en ? { en } : {}),
    ...(single ? { single } : {}),
    code,
    highlightedHtml,
  };
}

async function loadPreviewModule(
  path: string | undefined,
): Promise<RegistryPreviewModule | undefined> {
  const loadPreview = path ? registryPreviewModulesByPath[path] : undefined;

  return loadPreview ? loadPreview() : undefined;
}

async function highlightSourceFile(
  item: RegistryCatalogItemWithSources,
  file: RegistrySourceFileWithSource,
): Promise<HighlightedRegistrySourceFile> {
  const source = getRegistryDisplaySource(item, file);

  return {
    ...file,
    source,
    highlightedHtml: await highlightCodeToHtml(source, file.path),
  };
}

async function renderUsage(
  path: string,
  hasUsage: boolean,
  examples: ReadonlyMap<string, LoadedPreviewExample>,
) {
  if (!hasUsage) {
    return null;
  }

  return renderMdxContentModule(registryUsageModulesByPath[path], {
    components: {
      Preview: createMdxPreview(examples),
      PropsTable,
    },
  });
}

function renderPreview(example: LoadedPreviewExample) {
  return renderServerComponent(<PreviewExample example={example} />);
}

function PreviewExample({ example }: { example: LoadedPreviewExample }) {
  const { ar: Ar, en: En, single: Single } = example;

  return (
    <PreviewCard
      ar={Ar ? <Ar /> : undefined}
      en={En ? <En /> : undefined}
      single={Single ? <Single /> : undefined}
      code={example.code}
      highlightedHtml={example.highlightedHtml}
      className="my-4"
    />
  );
}

/** Binds `<Preview name="..." />` in registry MDX to this item's preview files. */
function createMdxPreview(examples: ReadonlyMap<string, LoadedPreviewExample>) {
  return function MdxPreview({ name = defaultRegistryPreviewName }: { name?: string }) {
    const example = examples.get(name);

    if (!example) {
      return (
        <p className="not-prose rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
          Missing preview “{name}”.
        </p>
      );
    }

    return <PreviewExample example={example} />;
  };
}
