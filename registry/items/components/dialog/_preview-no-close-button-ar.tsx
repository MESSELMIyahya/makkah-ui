"use client";

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
      <DialogTrigger render={<Button variant="outline" />}>تفعيل الأذان</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>تفعيل تنبيهات الأذان</DialogTitle>
          <DialogDescription>
            سنرسل لك تنبيهًا عند دخول وقت كل صلاة حسب موقعك الحالي.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>لاحقًا</DialogClose>
          <DialogClose render={<Button />}>تفعيل</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
