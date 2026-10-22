"use client";

import { Progress, ProgressLabel, ProgressValue } from "./progress";

export function Preview() {
  return (
    <Progress value={12} max={30} className="w-full max-w-sm">
      <ProgressLabel>صيام رمضان</ProgressLabel>
      <ProgressValue>{(_formatted, value) => `اليوم ${value} من 30`}</ProgressValue>
    </Progress>
  );
}
