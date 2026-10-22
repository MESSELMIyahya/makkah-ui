"use client";

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "./avatar";

export function Preview() {
  return (
    <div className="flex flex-col items-center gap-2">
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>عح</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>فز</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>سن</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+12</AvatarGroupCount>
      </AvatarGroup>
      <span className="text-sm text-muted-foreground">15 طالبًا في حلقة المغرب</span>
    </div>
  );
}
