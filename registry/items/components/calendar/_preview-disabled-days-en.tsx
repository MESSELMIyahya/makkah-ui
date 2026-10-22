"use client";

import * as React from "react";
import { enUS } from "react-day-picker/locale";

import { Calendar } from "./calendar";

export function Preview() {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        locale={enUS}
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={new Date(2027, 1, 1)}
        disabled={[{ dayOfWeek: [5] }, { before: new Date(2027, 1, 4) }]}
        className="rounded-3xl border"
      />
      <p className="text-sm text-muted-foreground">Quran class bookings are closed on Fridays.</p>
    </div>
  );
}
