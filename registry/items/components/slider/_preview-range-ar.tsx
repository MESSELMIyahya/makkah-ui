"use client";

import { useState } from "react";

import { Slider } from "./slider";

export function Preview() {
  const [budget, setBudget] = useState<readonly number[]>([2000, 6000]);

  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between text-sm">
        <span id="budget-label" className="font-medium">
          ميزانية باقة العمرة
        </span>
        <span className="text-muted-foreground tabular-nums">
          {budget[0]}–{budget[1]} ريال
        </span>
      </div>
      <Slider
        aria-labelledby="budget-label"
        value={budget}
        onValueChange={(value) => setBudget(typeof value === "number" ? [value] : value)}
        min={1000}
        max={10000}
        step={500}
      />
    </div>
  );
}
