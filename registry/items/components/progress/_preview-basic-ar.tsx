"use client";

import { Progress } from "./progress";

export function Preview() {
  return <Progress value={60} aria-label="تقدّم حجز العمرة" className="w-full max-w-sm" />;
}
