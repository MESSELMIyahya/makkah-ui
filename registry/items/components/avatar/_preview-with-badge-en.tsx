"use client";

import { Avatar, AvatarBadge, AvatarFallback } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>IR</AvatarFallback>
        <AvatarBadge className="bg-emerald-600">
          <span className="sr-only">Online</span>
        </AvatarBadge>
      </Avatar>
      <div className="grid gap-0.5 text-sm">
        <span className="font-medium">Ibrahim Rashid</span>
        <span className="text-muted-foreground">Teaching the Fajr halaqa now</span>
      </div>
    </div>
  );
}
