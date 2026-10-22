"use client";

import { IconSelector } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export function Preview() {
  return (
    <Collapsible className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-medium">تنبيهات الأذان مفعّلة لأربع صلوات</h4>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="إظهار تنبيهات الأذان أو إخفاؤها" />
          }
        >
          <IconSelector />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-lg border px-4 py-2 text-sm">الفجر · أذان كامل</div>
      <CollapsibleContent className="grid gap-2">
        <div className="rounded-lg border px-4 py-2 text-sm">الظهر · نغمة قصيرة</div>
        <div className="rounded-lg border px-4 py-2 text-sm">العصر · نغمة قصيرة</div>
        <div className="rounded-lg border px-4 py-2 text-sm">المغرب · أذان كامل</div>
      </CollapsibleContent>
    </Collapsible>
  );
}
