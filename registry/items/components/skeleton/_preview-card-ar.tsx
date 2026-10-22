"use client";

import { Skeleton } from "./skeleton";

export function Preview() {
  return (
    <output
      aria-label="جارٍ تحميل تفاصيل المسجد"
      className="grid w-full max-w-xs gap-4 rounded-2xl p-4 ring-1 ring-foreground/10"
    >
      <Skeleton className="aspect-video w-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton className="h-9 w-full rounded-4xl" />
    </output>
  );
}
