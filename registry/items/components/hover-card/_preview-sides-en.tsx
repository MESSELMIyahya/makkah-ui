"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const sides = [
  { side: "top", label: "Top" },
  { side: "bottom", label: "Bottom" },
  { side: "inline-start", label: "Inline start" },
  { side: "inline-end", label: "Inline end" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {sides.map(({ side, label }) => (
        <HoverCard key={side}>
          <HoverCardTrigger href={"#" + side} className="text-sm underline underline-offset-4">
            {label}
          </HoverCardTrigger>
          <HoverCardContent side={side}>Masjid al-Qiblatayn, Madinah.</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
