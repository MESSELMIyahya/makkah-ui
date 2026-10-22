"use client";

import { Progress, ProgressLabel, ProgressValue } from "./progress";

export function Preview() {
  return (
    <Progress value={12} max={30} className="w-full max-w-sm">
      <ProgressLabel>Ramadan fasts</ProgressLabel>
      <ProgressValue>{(_formatted, value) => `Day ${value} of 30`}</ProgressValue>
    </Progress>
  );
}
