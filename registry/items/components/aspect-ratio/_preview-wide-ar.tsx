"use client";

import { AspectRatio } from "./aspect-ratio";

export function Preview() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={21 / 9}
        className="flex items-center rounded-xl bg-linear-to-r from-slate-800 to-indigo-900 px-6 text-white"
      >
        <div className="grid gap-1">
          <span className="text-xs text-white/70">حلقة أسبوعية</span>
          <span className="text-lg font-semibold">ليالي السيرة في مسجد قباء</span>
        </div>
      </AspectRatio>
    </div>
  );
}
