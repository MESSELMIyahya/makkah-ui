"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const lectures = [
  { title: "السيرة: الهجرة النبوية", time: "بعد المغرب" },
  { title: "فقه الصيام", time: "بعد العشاء" },
  { title: "شرح أحكام الزكاة", time: "بعد العصر" },
  { title: "الاستعداد للحج", time: "بعد الفجر" },
];

export function Preview() {
  return (
    <Carousel
      orientation="vertical"
      opts={{ align: "start" }}
      className="my-12 w-full max-w-xs"
      aria-label="المحاضرات القادمة"
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
