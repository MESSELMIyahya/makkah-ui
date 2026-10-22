"use client";

import { IconChevronDown } from "@tabler/icons-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export function Preview() {
  return (
    <Collapsible defaultOpen className="w-full max-w-sm rounded-xl border">
      <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 p-4 text-start text-sm font-medium">
        Package includes
        <IconChevronDown
          className="size-4 text-muted-foreground transition-transform group-data-panel-open:rotate-180"
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
        Return flights, 5 nights near Masjid al-Haram, visa processing, and guided ziyarah in
        Madinah.
      </CollapsibleContent>
    </Collapsible>
  );
}
