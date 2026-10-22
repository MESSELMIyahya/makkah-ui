"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="flex h-5 items-center gap-3 text-sm">
      <span>1 رمضان 1448</span>
      <Separator orientation="vertical" />
      <span>مكة المكرمة</span>
      <Separator orientation="vertical" />
      <span className="text-muted-foreground">العشاء 8:05 م</span>
    </div>
  );
}
