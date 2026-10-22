"use client";

import { Separator } from "./separator";

const prayers = [
  { name: "Fajr", time: "4:52" },
  { name: "Dhuhr", time: "12:18" },
  { name: "Asr", time: "3:41" },
  { name: "Maghrib", time: "6:31" },
  { name: "Isha", time: "8:01" },
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
