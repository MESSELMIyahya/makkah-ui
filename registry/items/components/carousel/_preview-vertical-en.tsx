"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const lectures = [
  { title: "Seerah: the Hijrah", time: "After Maghrib" },
  { title: "Fiqh of fasting", time: "After Isha" },
  { title: "Zakat explained", time: "After Asr" },
  { title: "Preparing for Hajj", time: "After Fajr" },
];

export function Preview() {
  return (
    <Carousel
      orientation="vertical"
      opts={{ align: "start" }}
      className="my-12 w-full max-w-xs"
      aria-label="Upcoming lectures"
    >
      <CarouselContent className="h-48">
        {lectures.map((lecture) => (
          <CarouselItem key={lecture.title} className="basis-1/2">
            <div className="flex h-full flex-col justify-center rounded-2xl border bg-muted/40 px-4">
              <span className="font-medium">{lecture.title}</span>
              <span className="text-sm text-muted-foreground">{lecture.time}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
