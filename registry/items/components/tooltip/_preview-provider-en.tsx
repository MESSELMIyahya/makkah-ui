"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const prayers = [
  { name: "Fajr", time: "5:10 AM" },
  { name: "Dhuhr", time: "12:25 PM" },
  { name: "Asr", time: "3:45 PM" },
  { name: "Maghrib", time: "6:15 PM" },
  { name: "Isha", time: "7:45 PM" },
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
