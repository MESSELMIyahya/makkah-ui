"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const sides = [
  { side: "top", label: "Top" },
  { side: "bottom", label: "Bottom" },
  { side: "inline-start", label: "Inline start" },
  { side: "inline-end", label: "Inline end" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sides.map(({ side, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{label}</TooltipTrigger>
          <TooltipContent side={side}>Asr at 3:45 PM</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
