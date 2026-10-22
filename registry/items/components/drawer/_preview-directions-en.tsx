"use client";

import { Button } from "../button/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

const directions = [
  { direction: "up", label: "Up" },
  { direction: "down", label: "Down" },
  { direction: "left", label: "Left" },
  { direction: "right", label: "Right" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {directions.map(({ direction, label }) => (
        <Drawer key={direction} swipeDirection={direction} showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" />}>{label}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Halaqat this week</DrawerTitle>
              <DrawerDescription>
                Seerah lesson after Isha on Monday and fiqh lesson after Maghrib on Thursday.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
