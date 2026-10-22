"use client";

import { useDirection } from "@base-ui/react/direction-provider";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const masjids = [
  { name: "المسجد الحرام", city: "مكة المكرمة", color: "bg-emerald-500/15" },
  { name: "المسجد النبوي", city: "المدينة المنورة", color: "bg-teal-500/15" },
  { name: "مسجد قباء", city: "المدينة المنورة", color: "bg-cyan-500/15" },
  { name: "مسجد القبلتين", city: "المدينة المنورة", color: "bg-lime-500/15" },
  { name: "مسجد نمرة", city: "عرفات", color: "bg-green-500/15" },
];

export function Preview() {
  const direction = useDirection();

  return (
    <Carousel opts={{ direction, align: "start" }} className="w-full max-w-md" aria-label="المساجد">
      <CarouselContent>
        {masjids.map((masjid) => (
          <CarouselItem key={masjid.name} className="basis-1/2 sm:basis-1/3">
            <div
              className={`flex aspect-[3/4] flex-col justify-end gap-0.5 rounded-3xl p-3 ${masjid.color}`}
            >
              <span className="text-sm font-medium">{masjid.name}</span>
              <span className="text-xs text-muted-foreground">{masjid.city}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
