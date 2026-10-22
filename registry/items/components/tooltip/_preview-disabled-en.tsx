"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function Preview() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span className="inline-flex" />}>
        <Button disabled>Reserve a seat</Button>
      </TooltipTrigger>
      <TooltipContent>The Hajj rulings course is fully booked</TooltipContent>
    </Tooltip>
  );
}
