"use client";

import { useDirection } from "@base-ui/react/direction-provider";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const prayers = [
  { name: "الفجر", time: "4:52", color: "bg-sky-500/15 text-sky-700 dark:text-sky-300" },
  { name: "الظهر", time: "12:18", color: "bg-amber-500/15 text-amber-700 dark:text-amber-300" },
  { name: "العصر", time: "3:41", color: "bg-orange-500/15 text-orange-700 dark:text-orange-300" },
  { name: "المغرب", time: "6:22", color: "bg-rose-500/15 text-rose-700 dark:text-rose-300" },
  { name: "العشاء", time: "7:52", color: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300" },
];

export function Preview() {
  const direction = useDirection();

  return (
    <Carousel opts={{ direction }} className="w-full max-w-xs" aria-label="مواقيت الصلاة">
      <CarouselContent>
        {prayers.map((prayer) => (
          <CarouselItem key={prayer.name}>
            <div
              className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-3xl ${prayer.color}`}
            >
              <span className="text-lg font-medium">{prayer.name}</span>
              <span className="text-4xl font-semibold tabular-nums">{prayer.time}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
