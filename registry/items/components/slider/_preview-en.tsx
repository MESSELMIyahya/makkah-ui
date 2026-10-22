"use client";

import { useState } from "react";

import { Slider } from "./slider";

export function Preview() {
  const [amount, setAmount] = useState(250);

  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between text-sm">
        <span id="sadaqah-label" className="font-medium">
          Sadaqah amount
        </span>
        <span className="font-medium tabular-nums">{amount} SAR</span>
      </div>
      <Slider
        aria-labelledby="sadaqah-label"
        value={[amount]}
        onValueChange={(value) => setAmount(typeof value === "number" ? value : (value[0] ?? 0))}
        min={10}
        max={1000}
        step={10}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>10 SAR</span>
        <span>1,000 SAR</span>
      </div>
    </div>
  );
}
