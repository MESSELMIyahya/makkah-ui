"use client";

import { IconChevronDown } from "@tabler/icons-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export function Preview() {
  return (
    <Collapsible disabled className="w-full max-w-sm rounded-xl border">
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 p-4 text-start text-sm font-medium data-disabled:cursor-not-allowed data-disabled:opacity-50">
        التسجيل لحج 1448 (يُفتح قريبًا)
        <IconChevronDown className="size-4 text-muted-foreground" aria-hidden="true" />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 text-sm text-muted-foreground">
        ستظهر تفاصيل التسجيل هنا.
      </CollapsibleContent>
    </Collapsible>
  );
}
