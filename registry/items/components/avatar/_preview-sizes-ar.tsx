"use client";

import { Avatar, AvatarFallback } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm" aria-label="مريم صالح">
        <AvatarFallback>مص</AvatarFallback>
      </Avatar>
      <Avatar aria-label="يوسف كريم">
        <AvatarFallback>يك</AvatarFallback>
      </Avatar>
      <Avatar size="lg" aria-label="خديجة عمر">
        <AvatarFallback>خع</AvatarFallback>
      </Avatar>
    </div>
  );
}
