"use client";

import { ScrollArea, ScrollBar } from "./scroll-area";

const masjids = [
  { name: "المسجد الحرام", city: "مكة المكرمة", color: "bg-emerald-700" },
  { name: "المسجد النبوي", city: "المدينة المنورة", color: "bg-teal-700" },
  { name: "مسجد قباء", city: "المدينة المنورة", color: "bg-sky-700" },
  { name: "مسجد القبلتين", city: "المدينة المنورة", color: "bg-indigo-700" },
  { name: "مسجد نمرة", city: "عرفات", color: "bg-amber-700" },
];

export function Preview() {
  return (
    <ScrollArea className="w-full max-w-md rounded-xl border whitespace-nowrap">
      <div className="flex w-max gap-3 p-4">
        {masjids.map((masjid) => (
          <figure key={masjid.name} className="grid w-36 shrink-0 gap-2">
            <div className={`aspect-[4/3] rounded-lg ${masjid.color}`} />
            <figcaption className="grid text-xs">
              <span className="font-medium">{masjid.name}</span>
              <span className="text-muted-foreground">{masjid.city}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
