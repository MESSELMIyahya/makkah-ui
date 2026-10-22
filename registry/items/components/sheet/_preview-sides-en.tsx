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
  { side: "top", label: "Top" },
  { side: "right", label: "Right" },
  { side: "bottom", label: "Bottom" },
  { side: "left", label: "Left" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {sides.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>{label}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Nearby masjids</SheetTitle>
              <SheetDescription>
                Masjid an-Nabawi, Quba Mosque, Masjid al-Qiblatayn.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
