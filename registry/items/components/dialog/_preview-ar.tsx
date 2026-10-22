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
      <DialogTrigger render={<Button variant="outline" />}>تفاصيل الحجز</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>حجز رحلة العمرة</DialogTitle>
          <DialogDescription>راجع تفاصيل رحلتك قبل تأكيد الحجز.</DialogDescription>
        </DialogHeader>
        <ul className="grid gap-3">
          <li className="flex items-center gap-3">
            <IconCalendarEvent className="size-4 text-muted-foreground" />
            <span>١ رمضان ١٤٤٨ هـ</span>
          </li>
          <li className="flex items-center gap-3">
            <IconMapPin className="size-4 text-muted-foreground" />
            <span>مكة المكرمة، فندق قريب من المسجد الحرام</span>
          </li>
          <li className="flex items-center gap-3">
            <IconUsers className="size-4 text-muted-foreground" />
            <span>معتمران بالغان</span>
          </li>
        </ul>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>إلغاء</DialogClose>
          <DialogClose render={<Button />}>تأكيد الحجز</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
