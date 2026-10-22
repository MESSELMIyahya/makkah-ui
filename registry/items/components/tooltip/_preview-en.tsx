"use client";

import { IconBell, IconCompass, IconMapPin } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const actions = [
  { label: "Adhan alerts", icon: IconBell },
  { label: "Qibla direction", icon: IconCompass },
  { label: "Nearby masjids", icon: IconMapPin },
];

export function Preview() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {actions.map(({ label, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger render={<Button variant="outline" size="icon" aria-label={label} />}>
              <Icon />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
