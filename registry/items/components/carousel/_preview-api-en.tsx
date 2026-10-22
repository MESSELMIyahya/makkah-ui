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
  { title: "Water well", raised: "68%", color: "bg-sky-500/15" },
  { title: "Iftar meals", raised: "92%", color: "bg-amber-500/15" },
  { title: "Orphan care", raised: "45%", color: "bg-rose-500/15" },
  { title: "Masjid repairs", raised: "30%", color: "bg-emerald-500/15" },
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
      <Carousel
        setApi={setApi}
        opts={{ direction }}
        className="w-full"
        aria-label="Sadaqah campaigns"
      >
        <CarouselContent>
          {campaigns.map((campaign) => (
            <CarouselItem key={campaign.title}>
              <div
                className={`flex aspect-video flex-col items-center justify-center gap-1 rounded-3xl ${campaign.color}`}
              >
                <span className="text-lg font-medium">{campaign.title}</span>
                <span className="text-sm text-muted-foreground">{campaign.raised} funded</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        Campaign {current} of {campaigns.length}
      </p>
    </div>
  );
}
