"use client";

import { IconArrowRight } from "@tabler/icons-react";

import { useDirection } from "./direction";

export function Preview() {
  const direction = useDirection();
  const isRtl = direction === "rtl";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border bg-muted px-3 py-1 font-mono text-sm">
        direction = &quot;{direction}&quot;
      </span>
      <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        {isRtl ? "Right-to-left layout" : "Left-to-right layout"}
        <IconArrowRight aria-hidden="true" className="size-4 rtl:-scale-x-100" />
        Next prayer: Asr
      </p>
    </div>
  );
}
