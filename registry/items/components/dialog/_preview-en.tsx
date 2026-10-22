"use client";

import { IconCalendarEvent, IconMapPin, IconUsers } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function Preview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Booking details</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Umrah trip booking</DialogTitle>
          <DialogDescription>
            Review your trip details before confirming the booking.
          </DialogDescription>
        </DialogHeader>
        <ul className="grid gap-3">
          <li className="flex items-center gap-3">
            <IconCalendarEvent className="size-4 text-muted-foreground" />
            <span>1 Ramadan 1448 AH</span>
          </li>
          <li className="flex items-center gap-3">
            <IconMapPin className="size-4 text-muted-foreground" />
            <span>Makkah, hotel near Masjid al-Haram</span>
          </li>
          <li className="flex items-center gap-3">
            <IconUsers className="size-4 text-muted-foreground" />
            <span>Two adult pilgrims</span>
          </li>
        </ul>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Confirm booking</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
