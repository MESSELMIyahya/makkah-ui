"use client";

import { IconCalendarEvent, IconMapPin } from "@tabler/icons-react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

export function Preview() {
  return (
    <p className="text-sm">
      تُقام دروس السيرة في{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#masjid-an-nabawi"
          className="font-medium underline underline-offset-4"
        >
          المسجد النبوي
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground">
              م ن
            </div>
            <div className="grid gap-1.5">
              <h4 className="font-medium">المسجد النبوي</h4>
              <p className="text-muted-foreground">
                ثاني الحرمين الشريفين، وتُقام فيه الصلوات الخمس والدروس اليومية.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <IconMapPin className="size-3.5" />
                المدينة المنورة
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <IconCalendarEvent className="size-3.5" />
                بُني في السنة الأولى للهجرة
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      بعد صلاة المغرب.
    </p>
  );
}
