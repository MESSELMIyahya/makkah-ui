"use client";

import { Slider } from "./slider";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <span id="class-length-label" className="text-sm font-medium">
        مدة حلقة التحفيظ (بالدقائق)
      </span>
      <Slider
        aria-labelledby="class-length-label"
        defaultValue={[45]}
        min={15}
        max={120}
        step={15}
      />
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
        <span>15</span>
        <span>60</span>
        <span>120</span>
      </div>
    </div>
  );
}
