"use client";

import * as React from "react";

import { Button } from "../button/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export function Preview() {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="grid w-full max-w-sm gap-3">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium">خطبة الجمعة</span>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
          {open ? "إخفاء التفاصيل" : "عرض التفاصيل"}
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
        تبدأ الخطبة الساعة 12:15 ظهرًا باللغة العربية، مع ملخص بالإنجليزية في القاعة الجانبية.
      </CollapsibleContent>
    </Collapsible>
  );
}
