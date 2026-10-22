"use client";

import { Button } from "../button/button";
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "./popover";

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
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>{label}</PopoverTrigger>
          <PopoverContent side={side}>
            <PopoverDescription>
              صلاة الجمعة القادمة الساعة ١٢:١٥ م في المسجد النبوي.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
