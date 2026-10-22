"use client";

import { Avatar, AvatarBadge, AvatarFallback } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback>إر</AvatarFallback>
        <AvatarBadge className="bg-emerald-600">
          <span className="sr-only">متصل</span>
        </AvatarBadge>
      </Avatar>
      <div className="grid gap-0.5 text-sm">
        <span className="font-medium">إبراهيم راشد</span>
        <span className="text-muted-foreground">يقدّم حلقة الفجر الآن</span>
      </div>
    </div>
  );
}
