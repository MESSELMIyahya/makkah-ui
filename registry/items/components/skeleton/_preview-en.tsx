"use client";

import { Skeleton } from "./skeleton";

export function Preview() {
  return (
    <output aria-label="Loading teacher profile" className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>
    </output>
  );
}
