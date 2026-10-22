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
          ع ح
        </span>
        الشيخ عبد الله الحربي
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div className="grid gap-2">
          <div className="font-medium">الشيخ عبد الله الحربي</div>
          <p className="text-muted-foreground">
            يدرّس الفقه وأحكام الصيام في مسجد قباء منذ عشر سنوات.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <IconBook className="size-3.5" />٣ دروس أسبوعيًا
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
