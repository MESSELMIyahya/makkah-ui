"use client";

import { Button } from "../button/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export function Preview() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span className="inline-flex" />}>
        <Button disabled>احجز مقعدًا</Button>
      </TooltipTrigger>
      <TooltipContent>اكتمل التسجيل في دورة أحكام الحج</TooltipContent>
    </Tooltip>
  );
}
