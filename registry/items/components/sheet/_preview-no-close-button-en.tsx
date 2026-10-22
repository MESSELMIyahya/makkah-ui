"use client";

import { Button } from "../button/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export function Preview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Share location</SheetTrigger>
      <SheetContent side="bottom" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Allow access to your location?</SheetTitle>
          <SheetDescription>
            We use your location to calculate accurate prayer times and the qibla direction.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="sm:flex-row sm:justify-end">
          <SheetClose render={<Button variant="outline" />}>Not now</SheetClose>
          <SheetClose render={<Button />}>Allow</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
