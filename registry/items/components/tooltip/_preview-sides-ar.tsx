"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const sides = [
  { side: "top", label: "أعلى" },
  { side: "bottom", label: "أسفل" },
  { side: "inline-start", label: "البداية" },
  { side: "inline-end", label: "النهاية" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sides.map(({ side, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{label}</TooltipTrigger>
          <TooltipContent side={side}>العصر ٣:٤٥ م</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
