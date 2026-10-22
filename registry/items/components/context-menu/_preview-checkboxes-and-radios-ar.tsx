"use client";

import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "./context-menu";

export function Preview() {
  const [showHijri, setShowHijri] = useState(true);
  const [showSunrise, setShowSunrise] = useState(false);
  const [format, setFormat] = useState("12h");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-3xl border border-dashed text-sm text-muted-foreground">
        انقر بزر الفأرة الأيمن على جدول المواقيت
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>العرض</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showHijri} onCheckedChange={setShowHijri}>
            إظهار التاريخ الهجري
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showSunrise} onCheckedChange={setShowSunrise}>
            إظهار وقت الشروق
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>صيغة الوقت</ContextMenuLabel>
          <ContextMenuRadioGroup value={format} onValueChange={setFormat}>
            <ContextMenuRadioItem value="12h">١٢ ساعة</ContextMenuRadioItem>
            <ContextMenuRadioItem value="24h">٢٤ ساعة</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
