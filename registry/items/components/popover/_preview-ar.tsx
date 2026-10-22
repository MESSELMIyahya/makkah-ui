"use client";

import { IconAdjustmentsHorizontal, IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

import { Button } from "../button/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

const prayers = ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"];

export function Preview() {
  const [offsets, setOffsets] = useState<number[]>([0, 0, 0, 0, 0]);

  const adjust = (index: number, delta: number) =>
    setOffsets((current) => current.map((value, i) => (i === index ? value + delta : value)));

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <IconAdjustmentsHorizontal data-icon="inline-start" />
        ضبط المواقيت
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>ضبط مواقيت الصلاة</PopoverTitle>
          <PopoverDescription>عدّل كل وقت بالدقائق ليطابق مسجدك المحلي.</PopoverDescription>
        </PopoverHeader>
        <ul className="grid gap-2">
          {prayers.map((prayer, index) => (
            <li key={prayer} className="flex items-center justify-between gap-2">
              <span>{prayer}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-xs"
                  aria-label={"تأخير أقل " + prayer}
                  onClick={() => adjust(index, -1)}
                >
                  <IconMinus />
                </Button>
                <span className="w-14 text-center text-sm tabular-nums">{offsets[index]} د</span>
                <Button
                  variant="outline"
                  size="icon-xs"
                  aria-label={"تأخير أكثر " + prayer}
                  onClick={() => adjust(index, 1)}
                >
                  <IconPlus />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
