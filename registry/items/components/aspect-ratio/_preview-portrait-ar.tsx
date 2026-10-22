"use client";

import { AspectRatio } from "./aspect-ratio";

export function Preview() {
  return (
    <div className="w-40">
      <AspectRatio
        ratio={3 / 4}
        className="flex flex-col justify-end gap-1 rounded-xl bg-linear-to-b from-amber-200 to-amber-500 p-4 text-amber-950"
      >
        <span className="text-xs">1 شوال 1448</span>
        <span className="text-base font-semibold">عيد الفطر</span>
      </AspectRatio>
    </div>
  );
}
