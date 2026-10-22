"use client";

import { Avatar, AvatarFallback } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm" aria-label="Maryam Saleh">
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <Avatar aria-label="Yusuf Karim">
        <AvatarFallback>YK</AvatarFallback>
      </Avatar>
      <Avatar size="lg" aria-label="Khadija Omar">
        <AvatarFallback>KO</AvatarFallback>
      </Avatar>
    </div>
  );
}
