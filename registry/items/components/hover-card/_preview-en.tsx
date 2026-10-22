"use client";

import { IconCalendarEvent, IconMapPin } from "@tabler/icons-react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

export function Preview() {
  return (
    <p className="text-sm">
      Seerah lessons are held at{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#masjid-an-nabawi"
          className="font-medium underline underline-offset-4"
        >
          Masjid an-Nabawi
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground">
              MN
            </div>
            <div className="grid gap-1.5">
              <h4 className="font-medium">Masjid an-Nabawi</h4>
              <p className="text-muted-foreground">
                The second of the two holy masjids, hosting the five daily prayers and daily
                lessons.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <IconMapPin className="size-3.5" />
                Madinah
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <IconCalendarEvent className="size-3.5" />
                Built in the first year of Hijrah
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      after Maghrib prayer.
    </p>
  );
}
