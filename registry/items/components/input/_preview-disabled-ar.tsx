"use client";

import { Input } from "./input";

export function Preview() {
  return (
    <Input
      disabled
      aria-label="ملاحظات الحجز"
      placeholder="الحجز مغلق خلال العشر الأواخر"
      className="max-w-sm"
    />
  );
}
