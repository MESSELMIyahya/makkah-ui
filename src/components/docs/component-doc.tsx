import { IconFiles, IconTerminal } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import * as React from "react";

import type { RegistryItemDetail } from "../../lib/registry/detail.server";
import { getRegistryItemRoutePath, getRegistrySectionForType } from "../../lib/registry/sections";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DocsPageHeader } from "./docs-page-header";
import { InstallCommand } from "./install-command";
import { ManualInstallation } from "./manual-install";

type RegistryItemDocProps = {
  item: RegistryItemDetail;
};

export function RegistryItemDoc({ item }: RegistryItemDocProps) {
  const section = getRegistrySectionForType(item.type);
  const pagePath = getRegistryItemRoutePath(item);

  return (
    <article className="flex min-w-0 flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link to="/$section" params={{ section: section.id }} />}>
              {section.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{item.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DocsPageHeader
        title={item.title}
        description={item.description}
        pagePath={pagePath}
        registryItemName={item.name}
        links={item.links}
      />

      {item.preview ? (
        <React.Fragment key={`${item.name}:preview`}>{item.preview}</React.Fragment>
      ) : null}

      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold tracking-tight">Installation</h2>
        <Tabs key={`${item.name}:installation`} defaultValue="cli" className="gap-4">
          <TabsList variant="line">
            <TabsTrigger value="cli">
              <IconTerminal data-icon="inline-start" />
              CLI
            </TabsTrigger>
            <TabsTrigger value="manual">
              <IconFiles data-icon="inline-start" />
              Manual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cli">
            <InstallCommand item={{ name: item.name }} />
          </TabsContent>
          <TabsContent value="manual">
            <ManualInstallation
              item={{
                dependencies: item.dependencies,
                devDependencies: item.devDependencies,
                sourceFiles: item.sourceFiles,
              }}
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* The MDX body owns its sections (Anatomy, Usage, Variants, API Reference, ...). */}
      {item.usage ? <React.Fragment key={`${item.name}:usage`}>{item.usage}</React.Fragment> : null}
    </article>
  );
}
