"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="flex h-5 items-center gap-3 text-sm">
      <span>1 Ramadan 1448</span>
      <Separator orientation="vertical" />
      <span>Makkah</span>
      <Separator orientation="vertical" />
      <span className="text-muted-foreground">Isha 8:05 PM</span>
    </div>
  );
}
