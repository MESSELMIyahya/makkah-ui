"use client";

import { Textarea } from "./textarea";

export function Preview() {
  return (
    <Textarea
      disabled
      aria-label="Lecture registration"
      defaultValue="Registration for this lecture has closed."
      className="max-w-sm"
    />
  );
}
