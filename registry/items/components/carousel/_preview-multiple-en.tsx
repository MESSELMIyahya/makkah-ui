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
  { name: "Masjid al-Haram", city: "Makkah", color: "bg-emerald-500/15" },
  { name: "Masjid an-Nabawi", city: "Madinah", color: "bg-teal-500/15" },
  { name: "Masjid Quba", city: "Madinah", color: "bg-cyan-500/15" },
  { name: "Masjid al-Qiblatayn", city: "Madinah", color: "bg-lime-500/15" },
  { name: "Masjid Nimrah", city: "Arafat", color: "bg-green-500/15" },
];

export function Preview() {
  const direction = useDirection();

  return (
    <Carousel opts={{ direction, align: "start" }} className="w-full max-w-md" aria-label="Masjids">
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
