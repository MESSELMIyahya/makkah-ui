"use client";

import { Textarea } from "./textarea";

export function Preview() {
  return (
    <Textarea
      disabled
      aria-label="التسجيل في الدرس"
      defaultValue="انتهى التسجيل في هذا الدرس."
      className="max-w-sm"
    />
  );
}
