import { describe, expect, test } from "vite-plus/test";

import { publicRegistryItemTypes } from "./item-types";
import {
  getRegistryItemRoutePath,
  getRegistrySectionIdForType,
  getRegistrySectionItem,
  getRegistrySectionsWithItems,
  registrySections,
} from "./sections";

const fixtureRegistryItems = [
  { name: "alpha-card", type: "registry:ui" },
  { name: "stats-grid", type: "registry:block" },
  { name: "use-clipboard", type: "registry:hook" },
] as const;

describe("registry sections", () => {
  test("maps every public registry type into a visible section", () => {
    expect(
      publicRegistryItemTypes.map((type) => [type, getRegistrySectionIdForType(type)]),
    ).toEqual([
      ["registry:base", "utilities-and-hooks"],
      ["registry:block", "blocks"],
      ["registry:component", "components"],
      ["registry:font", "utilities-and-hooks"],
      ["registry:lib", "utilities-and-hooks"],
      ["registry:hook", "utilities-and-hooks"],
      ["registry:ui", "components"],
      ["registry:page", "utilities-and-hooks"],
      ["registry:file", "utilities-and-hooks"],
      ["registry:style", "utilities-and-hooks"],
      ["registry:theme", "utilities-and-hooks"],
      ["registry:item", "utilities-and-hooks"],
    ]);
  });

  test("builds section route paths for registry items", () => {
    expect(getRegistryItemRoutePath({ name: "alpha", type: "registry:ui" })).toBe(
      "/components/alpha",
    );
    expect(getRegistryItemRoutePath({ name: "alpha", type: "registry:block" })).toBe(
      "/blocks/alpha",
    );
    expect(getRegistryItemRoutePath({ name: "alpha", type: "registry:hook" })).toBe(
      "/utilities-and-hooks/alpha",
    );
  });

  test("groups registry items into visible sections", () => {
    const sections = getRegistrySectionsWithItems(fixtureRegistryItems);

    expect(sections.map((section) => section.id)).toEqual(
      expect.arrayContaining(["components", "blocks", "utilities-and-hooks"]),
    );
    expect(
      sections.find((section) => section.id === "components")?.items.map(({ name }) => name),
    ).toContain("alpha-card");
    expect(
      sections.find((section) => section.id === "blocks")?.items.map(({ name }) => name),
    ).toContain("stats-grid");
    expect(
      sections
        .find((section) => section.id === "utilities-and-hooks")
        ?.items.map(({ name }) => name),
    ).toContain("use-clipboard");
  });

  test("rejects wrong-section item lookups", () => {
    expect(
      getRegistrySectionItem(registrySections.components.id, "alpha-card", fixtureRegistryItems),
    ).toBeDefined();
    expect(
      getRegistrySectionItem(registrySections.blocks.id, "alpha-card", fixtureRegistryItems),
    ).toBeUndefined();
    expect(getRegistrySectionItem("missing", "alpha-card", fixtureRegistryItems)).toBeUndefined();
  });
});
