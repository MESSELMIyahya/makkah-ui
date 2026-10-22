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
  { name: "الفجر", time: "٥:١٠ ص" },
  { name: "الظهر", time: "١٢:٢٥ م" },
  { name: "العصر", time: "٣:٤٥ م" },
  { name: "المغرب", time: "٦:١٥ م" },
  { name: "العشاء", time: "٧:٤٥ م" },
];

export function Preview() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>تفاصيل المسجد</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>مسجد قباء</SheetTitle>
          <SheetDescription>أول مسجد بُني في الإسلام، جنوب المدينة المنورة.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-6">
          <div className="flex items-center gap-3">
            <IconMapPin className="size-4 text-muted-foreground" />
            <span>حي قباء، المدينة المنورة</span>
          </div>
          <div className="flex items-center gap-3">
            <IconUsers className="size-4 text-muted-foreground" />
            <span>يتسع لنحو ٢٠ ألف مصلٍّ</span>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-3 font-medium">
              <IconClock className="size-4 text-muted-foreground" />
              أوقات الإقامة اليوم
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
          <Button>الاتجاهات</Button>
          <SheetClose render={<Button variant="outline" />}>إغلاق</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
