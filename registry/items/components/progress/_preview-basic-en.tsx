"use client";

import { Progress } from "./progress";

export function Preview() {
  return <Progress value={60} aria-label="Umrah booking progress" className="w-full max-w-sm" />;
}
