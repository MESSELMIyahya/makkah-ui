"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { arSA } from "react-day-picker/locale";

import { Calendar } from "./calendar";

export function Preview() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2027, 1, 20),
    to: new Date(2027, 1, 27),
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        locale={arSA}
        mode="range"
        selected={range}
        onSelect={setRange}
        defaultMonth={new Date(2027, 1, 1)}
        numberOfMonths={2}
        className="rounded-3xl border"
      />
      <p className="text-sm text-muted-foreground">حدد تواريخ رحلة العمرة.</p>
    </div>
  );
}
