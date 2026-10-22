"use client";

import { Button } from "../button/button";
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "./popover";

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
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>{label}</PopoverTrigger>
          <PopoverContent side={side}>
            <PopoverDescription>
              Next Jumuah prayer is at 12:15 PM at Masjid an-Nabawi.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
