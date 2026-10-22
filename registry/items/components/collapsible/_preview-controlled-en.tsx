"use client";

import * as React from "react";

import { Button } from "../button/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export function Preview() {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="grid w-full max-w-sm gap-3">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">Friday khutbah</span>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
          {open ? "Hide details" : "Show details"}
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        Khutbah starts at 12:15 PM in Arabic, with an English summary in the side hall.
      </CollapsibleContent>
    </Collapsible>
  );
}
