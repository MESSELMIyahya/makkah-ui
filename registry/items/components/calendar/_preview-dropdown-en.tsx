"use client";

import * as React from "react";
import { enUS } from "react-day-picker/locale";

import { Calendar } from "./calendar";

export function Preview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2027, 4, 15));

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        locale={enUS}
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        defaultMonth={new Date(2027, 4, 1)}
        startMonth={new Date(2026, 0)}
        endMonth={new Date(2030, 11)}
        className="rounded-3xl border"
      />
      <p className="text-sm text-muted-foreground">Pick your Hajj departure date.</p>
    </div>
  );
}
