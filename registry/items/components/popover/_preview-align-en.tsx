"use client";

import { Button } from "../button/button";
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "./popover";

const alignments = [
  { align: "start", label: "Start" },
  { align: "center", label: "Center" },
  { align: "end", label: "End" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {alignments.map(({ align, label }) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" />}>{label}</PopoverTrigger>
          <PopoverContent align={align}>
            <PopoverDescription>
              The current zakat nisab equals the value of 85 grams of gold.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
