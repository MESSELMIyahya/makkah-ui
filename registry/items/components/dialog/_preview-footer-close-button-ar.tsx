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

export function Preview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>عن الحلقة</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>حلقة تحفيظ الأطفال</DialogTitle>
          <DialogDescription>
            تُعقد الحلقة بعد صلاة العصر من السبت إلى الأربعاء في مسجد قباء.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
