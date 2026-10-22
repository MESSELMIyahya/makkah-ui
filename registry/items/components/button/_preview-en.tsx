"use client";

import { IconClock } from "@tabler/icons-react";

import { Button } from "./button";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button>Book Umrah</Button>
      <Button variant="outline">
        <IconClock data-icon="inline-start" />
        Prayer times
      </Button>
    </div>
  );
}
