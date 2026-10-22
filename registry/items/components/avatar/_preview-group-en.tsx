"use client";

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "./avatar";

export function Preview() {
  return (
    <div className="flex flex-col items-center gap-2">
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>FZ</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+12</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-sm text-muted-foreground">15 students in the Maghrib halaqa</span>
    </div>
  );
}
