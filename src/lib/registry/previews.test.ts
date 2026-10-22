import { describe, expect, test } from "vite-plus/test";

import { createRegistryCatalogItems } from "./catalog-builder";
import { getRegistryPreviewReferences, parseRegistryPreviewFileName } from "./previews";

function preview(label: string) {
  return `export function Preview() { return "${label}"; }`;
}

describe("registry preview files", () => {
  test("parses default, named, and bilingual preview file names", () => {
    expect(parseRegistryPreviewFileName("_preview.tsx")).toEqual({ name: "default" });
    expect(parseRegistryPreviewFileName("_preview-ar.tsx")).toEqual({
      name: "default",
      language: "ar",
    });
    expect(parseRegistryPreviewFileName("_preview-en.tsx")).toEqual({
      name: "default",
      language: "en",
    });
    expect(parseRegistryPreviewFileName("_preview-outline.tsx")).toEqual({ name: "outline" });
    expect(parseRegistryPreviewFileName("_preview-with-icon-ar.tsx")).toEqual({
      name: "with-icon",
      language: "ar",
    });
    expect(parseRegistryPreviewFileName("_preview-Bad_Name.tsx")).toBeNull();
    expect(parseRegistryPreviewFileName("_previewer.tsx")).toBeNull();
    expect(parseRegistryPreviewFileName("button.tsx")).toBeNull();
  });

  test("finds Preview references in MDX", () => {
    expect(
      getRegistryPreviewReferences(
        `## Variants\n\n<Preview name="outline" />\n<Preview name='ghost'/>`,
      ),
    ).toEqual(["outline", "ghost"]);
  });

  test("groups preview files into examples with English code", () => {
    const root = "registry/items/components/sample-button";
    const [item] = createRegistryCatalogItems(
      {
        [`${root}/_registry.mdx`]: `---\nname: sample-button\ntype: registry:ui\n---\n\n<Preview name="outline" />`,
      },
      {
        [`${root}/_preview-ar.tsx`]: preview("ar"),
        [`${root}/_preview-en.tsx`]: preview("en"),
        [`${root}/_preview-outline-ar.tsx`]: preview("outline-ar"),
        [`${root}/_preview-outline-en.tsx`]: preview("outline-en"),
        "registry/items/components/other/_preview-ar.tsx": preview("other"),
      },
    );

    expect(item?.previews.map((example) => example.name)).toEqual(["default", "outline"]);
    expect(item?.hasPreview).toBe(true);
    expect(item?.previewSourceFile.fileName).toBe("_preview-en.tsx");
    expect(item?.previews[1]?.ar?.source).toContain("outline-ar");
  });
});
