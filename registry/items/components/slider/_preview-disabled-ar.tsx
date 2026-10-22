"use client";

import { Slider } from "./slider";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <span id="locked-label" className="text-sm font-medium text-muted-foreground">
        عدد أفراد المجموعة (مقفل بعد الدفع)
      </span>
      <Slider aria-labelledby="locked-label" defaultValue={[8]} min={1} max={20} disabled />
    </div>
  );
}
