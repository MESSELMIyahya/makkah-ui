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
      <SheetTrigger render={<Button variant="outline" />}>مشاركة الموقع</SheetTrigger>
      <SheetContent side="bottom" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>السماح بالوصول إلى موقعك؟</SheetTitle>
          <SheetDescription>نستخدم موقعك لحساب مواقيت الصلاة واتجاه القبلة بدقة.</SheetDescription>
        </SheetHeader>
        <SheetFooter className="sm:flex-row sm:justify-end">
          <SheetClose render={<Button variant="outline" />}>ليس الآن</SheetClose>
          <SheetClose render={<Button />}>السماح</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
