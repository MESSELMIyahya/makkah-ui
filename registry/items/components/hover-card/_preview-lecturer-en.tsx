"use client";

import { IconBook } from "@tabler/icons-react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

export function Preview() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="#lecturer"
        className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
          AH
        </span>
        Sheikh Abdullah Al-Harbi
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div className="grid gap-2">
          <div className="font-medium">Sheikh Abdullah Al-Harbi</div>
          <p className="text-muted-foreground">
            Has taught fiqh and the rulings of fasting at Quba Mosque for ten years.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <IconBook className="size-3.5" />3 lessons a week
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
