"use client";

import * as React from "react";
import { arSA } from "react-day-picker/locale";

import { Calendar } from "./calendar";

export function Preview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2027, 1, 8));

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        locale={arSA}
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={new Date(2027, 1, 1)}
        className="rounded-3xl border"
      />
      <p className="text-sm text-muted-foreground">
        {date
          ? `موعد العمرة: ${date.toLocaleDateString("ar", { dateStyle: "long" })}`
          : "اختر موعد العمرة"}
      </p>
    </div>
  );
}
