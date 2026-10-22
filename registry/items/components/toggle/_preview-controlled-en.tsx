"use client";

import { IconBell, IconBellOff } from "@tabler/icons-react";
import * as React from "react";

import { Toggle } from "./toggle";

export function Preview() {
  const [pressed, setPressed] = React.useState(true);

  return (
    <div className="flex flex-col items-center gap-3">
      <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
        {pressed ? <IconBell data-icon="inline-start" /> : <IconBellOff data-icon="inline-start" />}
        Maghrib adhan
      </Toggle>
      <p className="text-sm text-muted-foreground">
        {pressed ? "You will hear the adhan at Maghrib." : "The Maghrib adhan is muted."}
      </p>
    </div>
  );
}
