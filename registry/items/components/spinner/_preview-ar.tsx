"use client";

import { Spinner } from "./spinner";

export function Preview() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Spinner aria-label="جارٍ التحميل" />
      جارٍ تحميل مواقيت الصلاة…
    </div>
  );
}
