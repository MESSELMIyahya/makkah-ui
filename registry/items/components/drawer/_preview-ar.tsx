"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

import { Button } from "../button/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export function Preview() {
  const [minutes, setMinutes] = useState(15);

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>تذكير قبل الأذان</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>تذكير قبل صلاة الفجر</DrawerTitle>
            <DrawerDescription>
              اختر عدد الدقائق التي يصلك فيها التنبيه قبل الأذان.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center gap-6 p-6">
            <Button
              variant="outline"
              size="icon"
              aria-label="إنقاص خمس دقائق"
              disabled={minutes <= 5}
              onClick={() => setMinutes((value) => value - 5)}
            >
              <IconMinus />
            </Button>
            <div className="text-center">
              <div className="text-5xl font-semibold tabular-nums">{minutes}</div>
              <div className="text-sm text-muted-foreground">دقيقة قبل الأذان</div>
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label="زيادة خمس دقائق"
              disabled={minutes >= 60}
              onClick={() => setMinutes((value) => value + 5)}
            >
              <IconPlus />
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>حفظ</DrawerClose>
            <DrawerClose render={<Button variant="outline" />}>إلغاء</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
