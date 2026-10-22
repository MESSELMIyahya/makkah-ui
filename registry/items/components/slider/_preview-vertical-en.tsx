"use client";

import { Slider } from "./slider";

export function Preview() {
  return (
    <div className="flex h-44 items-stretch justify-center gap-10">
      <Slider orientation="vertical" defaultValue={[70]} aria-label="Adhan volume" />
      <Slider orientation="vertical" defaultValue={[35]} aria-label="Reminder volume" />
    </div>
  );
}
