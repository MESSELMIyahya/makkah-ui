"use client";

import { IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";

import { useIsMobile } from "./use-mobile";

export function Preview() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border bg-muted px-3 py-1 text-sm font-medium">
        {isMobile ? (
          <IconDeviceMobile aria-hidden="true" className="size-4" />
        ) : (
          <IconDeviceDesktop aria-hidden="true" className="size-4" />
        )}
        {isMobile ? "Mobile viewport" : "Desktop viewport"}
      </span>
      <p className="text-sm text-muted-foreground">
        {isMobile
          ? "Showing compact prayer times layout"
          : "Showing full weekly prayer times table"}
      </p>
    </div>
  );
}
