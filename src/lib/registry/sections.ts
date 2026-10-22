import type { RegistryCatalogItem } from "./catalog-builder";
import type { RegistryItemType } from "./item-types.ts";

export type RegistrySectionId = "components" | "blocks" | "utilities-and-hooks";

// The section was renamed from "Utilities"; old /utilities links redirect.
export const legacyUtilitiesSectionId = "utilities";

export type RegistryRouteItem = {
  name: string;
  type: RegistryItemType;
};

export type RegistryCategorizedItem = RegistryRouteItem & {
  categories?: readonly string[];
};

export type RegistryCategoryGroup<T extends RegistryCategorizedItem> = {
  id: string;
  title: string;
  sidebarTitle: string;
  items: T[];
};

type RegistryCategoryConfig = {
  title: string;
  sidebarTitle: string;
};

// Known `categories` frontmatter values, in display order. An item is grouped
// under its first known category; anything else falls into "Other".
const registryCategories: ReadonlyMap<string, RegistryCategoryConfig> = new Map([
  ["core", { title: "Core Components", sidebarTitle: "Core UI" }],
  ["hooks", { title: "Hooks", sidebarTitle: "Hooks" }],
  ["utils", { title: "Utilities", sidebarTitle: "Utilities" }],
]);

const otherRegistryCategoryId = "other";
const otherRegistryCategory: RegistryCategoryConfig = { title: "Other", sidebarTitle: "Other" };

export type RegistrySectionConfig = {
  id: RegistrySectionId;
  title: string;
  description: string;
  basePath: `/${RegistrySectionId}`;
  types: readonly RegistryItemType[];
};

export type RegistrySectionWithItems<T extends RegistryRouteItem = RegistryCatalogItem> =
  RegistrySectionConfig & {
    items: T[];
  };

const componentRegistryTypes = [
  "registry:ui",
  "registry:component",
] as const satisfies readonly RegistryItemType[];

const blockRegistryTypes = ["registry:block"] as const satisfies readonly RegistryItemType[];

const utilityRegistryTypes = [
  "registry:base",
  "registry:font",
  "registry:lib",
  "registry:hook",
  "registry:page",
  "registry:file",
  "registry:style",
  "registry:theme",
  "registry:item",
] as const satisfies readonly RegistryItemType[];

export const registrySections = {
  components: {
    id: "components",
    title: "Components",
    description: "Installable UI primitives and components.",
    basePath: "/components",
    types: componentRegistryTypes,
  },
  blocks: {
    id: "blocks",
    title: "Blocks",
    description: "Composed templates and larger UI sections.",
    basePath: "/blocks",
    types: blockRegistryTypes,
  },
  "utilities-and-hooks": {
    id: "utilities-and-hooks",
    title: "Utilities & Hooks",
    description: "Hooks, libraries, pages, files, themes, fonts, bases, styles, and other items.",
    basePath: "/utilities-and-hooks",
    types: utilityRegistryTypes,
  },
} as const satisfies Record<RegistrySectionId, RegistrySectionConfig>;

export const registrySectionList = [
  registrySections.components,
  registrySections.blocks,
  registrySections["utilities-and-hooks"],
] as const satisfies readonly RegistrySectionConfig[];

const registrySectionByType = {
  "registry:base": "utilities-and-hooks",
  "registry:block": "blocks",
  "registry:component": "components",
  "registry:font": "utilities-and-hooks",
  "registry:lib": "utilities-and-hooks",
  "registry:hook": "utilities-and-hooks",
  "registry:ui": "components",
  "registry:page": "utilities-and-hooks",
  "registry:file": "utilities-and-hooks",
  "registry:style": "utilities-and-hooks",
  "registry:theme": "utilities-and-hooks",
  "registry:item": "utilities-and-hooks",
} as const satisfies Record<RegistryItemType, RegistrySectionId>;

export function isRegistrySectionId(value: unknown): value is RegistrySectionId {
  return typeof value === "string" && registrySectionList.some((section) => section.id === value);
}

export function getRegistrySection(sectionId: string): RegistrySectionConfig | undefined {
  return isRegistrySectionId(sectionId) ? registrySections[sectionId] : undefined;
}

export function getRegistrySectionIdForType(type: RegistryItemType): RegistrySectionId {
  return registrySectionByType[type];
}

export function getRegistrySectionForType(type: RegistryItemType): RegistrySectionConfig {
  return registrySections[getRegistrySectionIdForType(type)];
}

export function getRegistryItemRoutePath(item: RegistryRouteItem): string {
  return `${getRegistrySectionForType(item.type).basePath}/${item.name}`;
}

export function getRegistrySectionsWithItems<T extends RegistryRouteItem>(
  items: readonly T[],
): RegistrySectionWithItems<T>[] {
  return registrySectionList
    .map((section) => toRegistrySectionWithItems(section, items))
    .filter((section) => section.items.length > 0);
}

export function getRegistrySectionWithItems<T extends RegistryRouteItem>(
  sectionId: string,
  items: readonly T[],
): RegistrySectionWithItems<T> | undefined {
  const section = getRegistrySection(sectionId);

  if (!section) {
    return undefined;
  }

  return toRegistrySectionWithItems(section, items);
}

export function getRegistrySectionItem<T extends RegistryRouteItem>(
  sectionId: string,
  itemName: string,
  items: readonly T[],
): T | undefined {
  const section = getRegistrySection(sectionId);

  if (!section) {
    return undefined;
  }

  return items.find(
    (item) => item.name === itemName && getRegistrySectionIdForType(item.type) === section.id,
  );
}

export function getRegistryItemCategoryId(item: RegistryCategorizedItem): string {
  return (
    item.categories?.find((category) => registryCategories.has(category)) ?? otherRegistryCategoryId
  );
}

export function getRegistryCategoryGroups<T extends RegistryCategorizedItem>(
  items: readonly T[],
): RegistryCategoryGroup<T>[] {
  const itemsByCategory = new Map<string, T[]>();
  const groups: RegistryCategoryGroup<T>[] = [];

  for (const item of items) {
    const id = getRegistryItemCategoryId(item);
    const categoryItems = itemsByCategory.get(id);

    if (categoryItems) {
      categoryItems.push(item);
    } else {
      itemsByCategory.set(id, [item]);
    }
  }

  for (const id of [...registryCategories.keys(), otherRegistryCategoryId]) {
    const categoryItems = itemsByCategory.get(id);

    if (!categoryItems) {
      continue;
    }

    const category = registryCategories.get(id) ?? otherRegistryCategory;

    groups.push({
      id,
      title: category.title,
      sidebarTitle: category.sidebarTitle,
      items: categoryItems,
    });
  }

  return groups;
}

function toRegistrySectionWithItems<T extends RegistryRouteItem>(
  section: RegistrySectionConfig,
  items: readonly T[],
): RegistrySectionWithItems<T> {
  const sectionItems = getRegistryItemsForSection(items, section.id);

  return {
    ...section,
    items: sectionItems,
  };
}

function getRegistryItemsForSection<T extends RegistryRouteItem>(
  items: readonly T[],
  sectionId: RegistrySectionId,
): T[] {
  // Keep items of the same category adjacent so lists can render group headings.
  return getRegistryCategoryGroups(
    items.filter((item) => getRegistrySectionIdForType(item.type) === sectionId),
  ).flatMap((group) => group.items);
}
