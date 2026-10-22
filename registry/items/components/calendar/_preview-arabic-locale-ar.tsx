"use client";

import * as React from "react";
import { arSA } from "react-day-picker/locale";

import { Calendar } from "./calendar";

const hijri = new Intl.DateTimeFormat("ar-u-ca-islamic-umalqura", { dateStyle: "long" });

export function Preview() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2027, 1, 8));

  return (
    <div className="flex flex-col items-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        locale={arSA}
        numerals="arab"
        defaultMonth={new Date(2027, 1, 1)}
        className="rounded-3xl border"
      />
      <p className="text-sm text-muted-foreground">
        {date ? `التاريخ الهجري: ${hijri.format(date)}` : "اختر تاريخًا"}
      </p>
    </div>
  );
}
