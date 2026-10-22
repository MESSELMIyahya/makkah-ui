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
  { direction: "up", label: "للأعلى" },
  { direction: "down", label: "للأسفل" },
  { direction: "left", label: "لليسار" },
  { direction: "right", label: "لليمين" },
] as const;

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {directions.map(({ direction, label }) => (
        <Drawer key={direction} swipeDirection={direction} showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" />}>{label}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>حلقات الأسبوع</DrawerTitle>
              <DrawerDescription>
                درس السيرة بعد العشاء يوم الإثنين، ودرس الفقه بعد المغرب يوم الخميس.
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
