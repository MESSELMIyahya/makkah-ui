"use client";

import { Avatar, AvatarFallback } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>AH</AvatarFallback>
      </Avatar>
      <div className="grid gap-0.5 text-sm">
        <span className="font-medium">Abdullah Hassan</span>
        <span className="text-muted-foreground">Halaqa teacher · Masjid Quba</span>
      </div>
    </div>
  );
}
