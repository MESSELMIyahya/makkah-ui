"use client";

import { IconMoon } from "@tabler/icons-react";

import { Toggle } from "./toggle";

export function Preview() {
  return (
    <Toggle aria-label="Ramadan mode">
      <IconMoon />
    </Toggle>
  );
}
