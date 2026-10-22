"use client";

import { Progress, ProgressLabel, ProgressValue } from "./progress";

export function Preview() {
  return (
    <Progress value={75} className="w-full max-w-sm">
      <ProgressLabel>صندوق ترميم المسجد</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
