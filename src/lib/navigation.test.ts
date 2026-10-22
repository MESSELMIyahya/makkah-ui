import { describe, expect, test } from "vite-plus/test";

import type { DocsNavigationSection } from "./docs/catalog";
import { createSiteNavigationSections } from "./navigation";

const fixtureDocsSection = {
  id: "docs",
  title: "Docs",
  basePath: "/docs",
  items: [
    {
      title: "Introduction",
      description: "Start here.",
      slug: "",
      routePath: "/docs",
    },
  ],
} satisfies DocsNavigationSection;

const fixtureRegistryItems = [
  {
    name: "alpha-card",
    title: "Alpha Card",
    description: "A compact card.",
    type: "registry:ui",
    categories: [] as string[],
  },
  {
    name: "stats-grid",
    title: "Stats Grid",
    description: "A dashboard block.",
    type: "registry:block",
    categories: [] as string[],
  },
  {
    name: "use-clipboard",
    title: "useClipboard",
    description: "A clipboard hook.",
    type: "registry:hook",
    categories: [] as string[],
  },
] as const;

describe("site navigation", () => {
  test("shows section-based registry navigation", () => {
    const sections = createSiteNavigationSections({
      docsSection: fixtureDocsSection,
      registryItems: fixtureRegistryItems,
    });

    expect(sections.map((section) => section.id)).toEqual([
      "docs",
      "components",
      "blocks",
      "utilities-and-hooks",
    ]);
    expect(sections.map((section) => section.title)).toEqual([
      "Docs",
      "Components",
      "Blocks",
      "Utilities & Hooks",
    ]);
  });

  test("uses section URLs for registry item navigation", () => {
    const sections = createSiteNavigationSections({
      docsSection: fixtureDocsSection,
      registryItems: fixtureRegistryItems,
    });
    const sectionItems = sections.flatMap((section) => section.items);

    expect(
      sectionItems.find((item) => item.kind === "registry" && item.name === "alpha-card"),
    ).toMatchObject({
      routePath: "/components/alpha-card",
      sectionId: "components",
    });

    expect(
      sectionItems.find((item) => item.kind === "registry" && item.name === "stats-grid"),
    ).toMatchObject({
      routePath: "/blocks/stats-grid",
      sectionId: "blocks",
    });

    expect(
      sectionItems.find((item) => item.kind === "registry" && item.name === "use-clipboard"),
    ).toMatchObject({
      routePath: "/utilities-and-hooks/use-clipboard",
      sectionId: "utilities-and-hooks",
    });
  });

  test("does not add registry type groups to navigation items", () => {
    const sections = createSiteNavigationSections({
      docsSection: fixtureDocsSection,
      registryItems: fixtureRegistryItems,
    });
    const registryItems = sections
      .flatMap((section) => section.items)
      .filter((item) => item.kind === "registry");

    expect(registryItems.every((item) => !("group" in item))).toBe(true);
  });

  test("groups categorized registry items under sidebar labels", () => {
    const sections = createSiteNavigationSections({
      docsSection: fixtureDocsSection,
      registryItems: [
        ...fixtureRegistryItems,
        {
          name: "button",
          title: "Button",
          description: "A button.",
          type: "registry:ui",
          categories: ["core"],
        },
      ],
    });
    const components = sections.find((section) => section.id === "components")?.items ?? [];

    expect(components.map((item) => ({ title: item.title, group: item.group }))).toEqual([
      { title: "Button", group: "Core UI" },
      { title: "Alpha Card", group: "Other" },
    ]);
  });
});
