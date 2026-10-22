"use client";

import { Button } from "../button/button";
import { Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "./popover";

const alignments = [
  { align: "start", label: "البداية" },
  { align: "center", label: "الوسط" },
  { align: "end", label: "النهاية" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {alignments.map(({ align, label }) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" />}>{label}</PopoverTrigger>
          <PopoverContent align={align}>
            <PopoverDescription>
              نصاب الزكاة الحالي يعادل قيمة ٨٥ غرامًا من الذهب.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
