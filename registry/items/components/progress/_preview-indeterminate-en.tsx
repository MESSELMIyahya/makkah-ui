"use client";

import { Progress, ProgressLabel } from "./progress";

export function Preview() {
  return (
    <Progress value={null} className="w-full max-w-sm">
      <ProgressLabel>Calculating zakat…</ProgressLabel>
    </Progress>
  );
}
