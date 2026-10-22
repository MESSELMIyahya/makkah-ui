"use client";

import { IconBell } from "@tabler/icons-react";

import { Toggle } from "./toggle";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Toggle variant="outline" size="sm">
        <IconBell data-icon="inline-start" />
        Fajr
      </Toggle>
      <Toggle variant="outline">
        <IconBell data-icon="inline-start" />
        Fajr
      </Toggle>
      <Toggle variant="outline" size="lg">
        <IconBell data-icon="inline-start" />
        Fajr
      </Toggle>
    </div>
  );
}
