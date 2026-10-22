"use client";

import { IconChevronRight } from "@tabler/icons-react";

import { DirectionProvider, useDirection } from "./direction";

function DirectionBadge({ label }: { label: string }) {
  const direction = useDirection();

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm">
      <span>{label}</span>
      <span className="inline-flex items-center gap-1 text-muted-foreground">
        {direction === "rtl" ? "RTL" : "LTR"}
        <IconChevronRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
      </span>
    </div>
  );
}

export function Preview() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <DirectionProvider direction="rtl">
        <div dir="rtl" lang="ar">
          <DirectionBadge label="حجز العمرة" />
        </div>
      </DirectionProvider>
      <DirectionProvider direction="ltr">
        <div dir="ltr" lang="en">
          <DirectionBadge label="Umrah booking" />
        </div>
      </DirectionProvider>
    </div>
  );
}
