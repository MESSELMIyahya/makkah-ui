"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const prayers = [
  { name: "الفجر", time: "٥:١٠ ص" },
  { name: "الظهر", time: "١٢:٢٥ م" },
  { name: "العصر", time: "٣:٤٥ م" },
  { name: "المغرب", time: "٦:١٥ م" },
  { name: "العشاء", time: "٧:٤٥ م" },
];

export function Preview() {
  return (
    <TooltipProvider delay={600} closeDelay={0}>
      <div className="flex flex-wrap justify-center gap-2">
        {prayers.map((prayer) => (
          <Tooltip key={prayer.name}>
            <TooltipTrigger render={<Button variant="secondary" size="sm" />}>
              {prayer.name}
            </TooltipTrigger>
            <TooltipContent>{prayer.time}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
