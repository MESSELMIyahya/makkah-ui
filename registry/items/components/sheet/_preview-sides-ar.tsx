"use client";

import { Button } from "../button/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const sides = [
  { side: "top", label: "أعلى" },
  { side: "right", label: "يمين" },
  { side: "bottom", label: "أسفل" },
  { side: "left", label: "يسار" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sides.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>{label}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>قائمة المساجد القريبة</SheetTitle>
              <SheetDescription>المسجد النبوي، مسجد قباء، مسجد القبلتين.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
