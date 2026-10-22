"use client";

import { IconBell, IconBookmark } from "@tabler/icons-react";

import { Toggle } from "./toggle";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle aria-label="Adhan reminder" defaultPressed>
        <IconBell />
      </Toggle>
      <Toggle variant="outline">
        <IconBookmark data-icon="inline-start" />
        Save lecture
      </Toggle>
    </div>
  );
}
