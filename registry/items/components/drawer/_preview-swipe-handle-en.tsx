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

export function Preview() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Iftar details</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Iftar at the masjid</DrawerTitle>
          <DrawerDescription>Daily throughout Ramadan 1448 AH.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">
          Drag the handle down to close the panel. Meals are served at Maghrib adhan.
        </div>
      </DrawerContent>
    </Drawer>
  );
}
