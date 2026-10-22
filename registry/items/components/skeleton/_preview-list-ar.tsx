"use client";

import { Skeleton } from "./skeleton";

const rows = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

export function Preview() {
  return (
    <output aria-label="جارٍ تحميل مواقيت الصلاة" className="grid w-full max-w-xs gap-3">
      {rows.map((row) => (
        <div key={row} className="flex items-center justify-between gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-14" />
        </div>
      ))}
    </output>
  );
}
