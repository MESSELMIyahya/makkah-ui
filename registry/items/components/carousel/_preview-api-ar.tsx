"use client";

import { useDirection } from "@base-ui/react/direction-provider";
import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const campaigns = [
  { title: "بئر ماء", raised: "68%", color: "bg-sky-500/15" },
  { title: "وجبات الإفطار", raised: "92%", color: "bg-amber-500/15" },
  { title: "كفالة الأيتام", raised: "45%", color: "bg-rose-500/15" },
  { title: "ترميم المساجد", raised: "30%", color: "bg-emerald-500/15" },
];

export function Preview() {
  const direction = useDirection();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(1);

  React.useEffect(() => {
    if (!api) return undefined;
    const update = () => setCurrent(api.selectedScrollSnap() + 1);
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Carousel setApi={setApi} opts={{ direction }} className="w-full" aria-label="حملات الصدقة">
        <CarouselContent>
          {campaigns.map((campaign) => (
            <CarouselItem key={campaign.title}>
              <div
                className={`flex aspect-video flex-col items-center justify-center gap-1 rounded-3xl ${campaign.color}`}
              >
                <span className="text-lg font-medium">{campaign.title}</span>
                <span className="text-sm text-muted-foreground">تم تمويل {campaign.raised}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        الحملة {current} من {campaigns.length}
      </p>
    </div>
  );
}
