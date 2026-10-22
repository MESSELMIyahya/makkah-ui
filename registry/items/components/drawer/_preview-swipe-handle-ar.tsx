"use client";

import { Button } from "../button/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export function Preview() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>تفاصيل الإفطار</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>إفطار صائم في المسجد</DrawerTitle>
          <DrawerDescription>يوميًا طوال شهر رمضان ١٤٤٨ هـ.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm text-muted-foreground">
          اسحب المقبض إلى الأسفل لإغلاق اللوحة. تبدأ الوجبات عند أذان المغرب.
        </div>
      </DrawerContent>
    </Drawer>
  );
}
