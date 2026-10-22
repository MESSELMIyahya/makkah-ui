"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage src="/avatars/Sheikh Dr. Abdul Razzaq bin Abdul Muhsin Al-Badr.jpg" />
        <AvatarFallback>عب</AvatarFallback>
      </Avatar>
      <div className="grid gap-0.5 text-sm">
        <span className="font-medium">
          {/* الشيخ الدكتور صالح بن عبد الله بن حمد العصيمي */}
          الشيخ الدكتور عبد الرزاقد البدر
        </span>
        <span className="text-muted-foreground">
          عالم وداعية إسلامي، وأستاذ في الجامعة الإسلامية بالمدينة المنورة
        </span>
      </div>
    </div>
  );
}
