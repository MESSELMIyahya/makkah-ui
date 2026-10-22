"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="w-full max-w-sm text-sm">
      <p className="font-medium">Ramadan timetable</p>
      <p className="text-muted-foreground">1 Ramadan 1448 AH</p>
      <Separator className="my-4" />
      <p className="text-muted-foreground">Suhoor ends at 4:42 AM and iftar begins at 6:31 PM.</p>
    </div>
  );
}
