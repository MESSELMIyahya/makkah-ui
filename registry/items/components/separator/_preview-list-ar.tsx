"use client";

import { Separator } from "./separator";

const prayers = [
  { name: "الفجر", time: "4:52" },
  { name: "الظهر", time: "12:18" },
  { name: "العصر", time: "3:41" },
  { name: "المغرب", time: "6:31" },
  { name: "العشاء", time: "8:01" },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs text-sm">
      {prayers.map((prayer, index) => (
        <div key={prayer.name}>
          {index > 0 && <Separator className="my-2" />}
          <div className="flex items-center justify-between">
            <span>{prayer.name}</span>
            <span className="text-muted-foreground tabular-nums">{prayer.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
