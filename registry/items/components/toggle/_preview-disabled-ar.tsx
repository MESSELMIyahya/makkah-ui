"use client";

import { IconBookmark } from "@tabler/icons-react";

import { Toggle } from "./toggle";

export function Preview() {
  return (
    <Toggle variant="outline" disabled>
      <IconBookmark data-icon="inline-start" />
      حفظ المحاضرة
    </Toggle>
  );
}
