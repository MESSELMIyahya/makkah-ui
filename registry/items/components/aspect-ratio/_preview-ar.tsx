"use client";

import { IconPlayerPlayFilled } from "@tabler/icons-react";

import { AspectRatio } from "./aspect-ratio";

export function Preview() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-emerald-700 to-teal-900 text-white"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <IconPlayerPlayFilled className="size-10" aria-hidden="true" />
          <span className="text-sm font-medium">بث مباشر لصلاة التراويح من المسجد الحرام</span>
        </div>
      </AspectRatio>
    </div>
  );
}
