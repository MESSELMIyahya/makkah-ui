"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const sides = [
  { side: "top", label: "أعلى" },
  { side: "bottom", label: "أسفل" },
  { side: "inline-start", label: "البداية" },
  { side: "inline-end", label: "النهاية" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {sides.map(({ side, label }) => (
        <HoverCard key={side}>
          <HoverCardTrigger href={"#" + side} className="text-sm underline underline-offset-4">
            {label}
          </HoverCardTrigger>
          <HoverCardContent side={side}>مسجد القبلتين، المدينة المنورة.</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
