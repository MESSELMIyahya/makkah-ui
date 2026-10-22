"use client";

import { IconRosetteDiscountCheck } from "@tabler/icons-react";

import { AspectRatio } from "./aspect-ratio";

export function Preview() {
  return (
    <div className="w-48">
      <AspectRatio
        ratio={1}
        className="flex flex-col items-center justify-center gap-2 rounded-xl bg-muted text-center"
      >
        <IconRosetteDiscountCheck className="size-10 text-primary" aria-hidden="true" />
        <span className="text-sm font-medium">Halal certificate</span>
      </AspectRatio>
    </div>
  );
}
