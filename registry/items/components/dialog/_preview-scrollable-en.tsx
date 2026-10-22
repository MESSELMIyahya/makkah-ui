"use client";

import { Button } from "../button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const nights = Array.from({ length: 10 }, (_, index) => index + 21);

export function Preview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Last ten nights program</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Last ten nights program</DialogTitle>
          <DialogDescription>
            Night prayer and lesson times at the masjid for all ten nights.
          </DialogDescription>
        </DialogHeader>
        <ul className="-mx-6 grid max-h-64 gap-2 overflow-y-auto px-6">
          {nights.map((night) => (
            <li
              key={night}
              className="flex items-center justify-between rounded-2xl bg-muted px-4 py-3"
            >
              <span>Night {night}</span>
              <span className="text-muted-foreground">Qiyam 12:30 AM</span>
            </li>
          ))}
        </ul>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
