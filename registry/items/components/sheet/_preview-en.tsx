"use client";

import { IconClock, IconMapPin, IconUsers } from "@tabler/icons-react";

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

const prayers = [
  { name: "Fajr", time: "5:10 AM" },
  { name: "Dhuhr", time: "12:25 PM" },
  { name: "Asr", time: "3:45 PM" },
  { name: "Maghrib", time: "6:15 PM" },
  { name: "Isha", time: "7:45 PM" },
];

export function Preview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Masjid details</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Quba Mosque</SheetTitle>
          <SheetDescription>The first masjid built in Islam, south of Madinah.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-6">
          <div className="flex items-center gap-3">
            <IconMapPin className="size-4 text-muted-foreground" />
            <span>Quba district, Madinah</span>
          </div>
          <div className="flex items-center gap-3">
            <IconUsers className="size-4 text-muted-foreground" />
            <span>Holds about 20,000 worshippers</span>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-3 font-medium">
              <IconClock className="size-4 text-muted-foreground" />
              Iqamah times today
            </div>
            <ul className="grid gap-1 rounded-2xl bg-muted p-3">
              {prayers.map((prayer) => (
                <li key={prayer.name} className="flex justify-between">
                  <span>{prayer.name}</span>
                  <span className="text-muted-foreground tabular-nums">{prayer.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SheetFooter>
          <Button>Directions</Button>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
