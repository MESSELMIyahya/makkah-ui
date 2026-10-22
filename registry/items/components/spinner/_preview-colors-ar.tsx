"use client";

import { Spinner } from "./spinner";

export function Preview() {
  return (
    <div className="flex items-center gap-4">
      <Spinner aria-label="جارٍ التحميل" className="size-6 text-primary" />
      <Spinner aria-label="جارٍ التحميل" className="size-6 text-muted-foreground" />
      <Spinner aria-label="جارٍ التحميل" className="size-6 text-destructive" />
    </div>
  );
}
