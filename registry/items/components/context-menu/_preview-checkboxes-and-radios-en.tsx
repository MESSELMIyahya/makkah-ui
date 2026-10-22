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
        Right-click the prayer timetable
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Display</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showHijri} onCheckedChange={setShowHijri}>
            Show Hijri date
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showSunrise} onCheckedChange={setShowSunrise}>
            Show sunrise time
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Time format</ContextMenuLabel>
          <ContextMenuRadioGroup value={format} onValueChange={setFormat}>
            <ContextMenuRadioItem value="12h">12-hour</ContextMenuRadioItem>
            <ContextMenuRadioItem value="24h">24-hour</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
