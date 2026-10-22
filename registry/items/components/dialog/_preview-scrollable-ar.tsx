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
      <DialogTrigger render={<Button variant="outline" />}>برنامج العشر الأواخر</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>برنامج العشر الأواخر</DialogTitle>
          <DialogDescription>مواعيد القيام والدروس في المسجد طوال الليالي العشر.</DialogDescription>
        </DialogHeader>
        <ul className="-mx-6 grid max-h-64 gap-2 overflow-y-auto px-6">
          {nights.map((night) => (
            <li
              key={night}
              className="flex items-center justify-between rounded-2xl bg-muted px-4 py-3"
            >
              <span>ليلة {night}</span>
              <span className="text-muted-foreground">قيام ١٢:٣٠ ص</span>
            </li>
          ))}
        </ul>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
