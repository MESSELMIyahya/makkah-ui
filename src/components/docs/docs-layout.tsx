import { useRouterState } from "@tanstack/react-router";
import type * as React from "react";

import { getSiteNavigationSection, type SiteNavigationSectionId } from "../../lib/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { DocsSidebar } from "./docs-sidebar";

type DocsLayoutProps = {
  section: SiteNavigationSectionId;
  children: React.ReactNode;
};

export function DocsLayout({ section, children }: DocsLayoutProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const sidebarSections = [getSiteNavigationSection(section)];

  return (
    <div className="mx-auto flex w-full max-w-screen-2xl gap-8 px-4 sm:px-6 lg:px-8">
      {/* self-start + svh keep the sticky sidebar a fixed height so it doesn't jump while the page scrolls. */}
      <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] w-56 shrink-0 self-start lg:block">
        <ScrollArea className="size-full overscroll-contain *:data-[slot=scroll-area-viewport]:overscroll-contain">
          <DocsSidebar
            sections={sidebarSections}
            pathname={pathname}
            className="py-8 pe-3 [&_[data-sidebar-home]]:hidden"
          />
        </ScrollArea>
      </aside>
      <main className="min-w-0 flex-1 py-8">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
