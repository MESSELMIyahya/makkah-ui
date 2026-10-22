"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Masjid al-Haram</h4>
        <p className="text-sm text-muted-foreground">
          Daily prayer times, lectures, and visitor services.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Prayers</span>
        <Separator orientation="vertical" />
        <span>Lectures</span>
        <Separator orientation="vertical" />
        <span>Services</span>
      </div>
    </div>
  );
}
