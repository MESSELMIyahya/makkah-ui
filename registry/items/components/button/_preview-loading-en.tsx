"use client";

import { IconLoader2 } from "@tabler/icons-react";

import { Button } from "./button";

export function Preview() {
  return (
    <Button disabled focusableWhenDisabled>
      <IconLoader2 data-icon="inline-start" className="animate-spin" />
      Paying zakat…
    </Button>
  );
}
