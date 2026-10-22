import { IconArrowUpRight } from "@tabler/icons-react";

import type { RegistryItemDocsLinks } from "../../lib/registry/mdx";
import {
  getCanonicalDocsUrl,
  getCanonicalRegistryItemUrl,
  getDocsMarkdownPath,
} from "../../lib/site-config";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { DocsPageActions } from "./docs-page-actions";

type DocsPageHeaderProps = {
  title: string;
  description: string;
  pagePath: string;
  registryItemName?: string;
  links?: RegistryItemDocsLinks;
  className?: string;
};

const docsLinkLabels = [
  ["baseUi", "Base UI"],
  ["shadcn", "shadcn/ui"],
] as const satisfies readonly (readonly [keyof RegistryItemDocsLinks, string])[];

export function DocsPageHeader({
  title,
  description,
  pagePath,
  registryItemName,
  links,
  className,
}: DocsPageHeaderProps) {
  const docsLinks = docsLinkLabels.flatMap(([key, label]) => {
    const href = links?.[key];

    return href ? [{ key, label, href }] : [];
  });

  return (
    <header className={cn("flex max-w-3xl flex-col gap-2", className)}>
      <div className="flex flex-row flex-wrap items-start justify-between gap-3">
        <h1 className="min-w-0 font-heading text-3xl font-semibold tracking-tight">{title}</h1>
        <DocsPageActions
          markdownPath={getDocsMarkdownPath(pagePath)}
          pageDescription={description}
          pageTitle={title}
          pageUrl={getCanonicalDocsUrl(pagePath)}
          registryItemJsonUrl={
            registryItemName ? getCanonicalRegistryItemUrl(registryItemName) : undefined
          }
          className="shrink-0"
        />
      </div>
      <p className="text-base text-muted-foreground">{description}</p>
      {docsLinks.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {docsLinks.map((link) => (
            <Badge
              key={link.key}
              variant="secondary"
              render={
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.label} documentation`}
                />
              }
            >
              {link.label}
              <IconArrowUpRight data-icon="inline-end" aria-hidden />
            </Badge>
          ))}
        </div>
      ) : null}
    </header>
  );
}
