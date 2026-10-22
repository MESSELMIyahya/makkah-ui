"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const prayers = [
  { label: "الفجر", value: "fajr" },
  { label: "الظهر", value: "dhuhr" },
  { label: "العصر", value: "asr" },
  { label: "المغرب", value: "maghrib" },
  { label: "العشاء", value: "isha" },
];

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Select items={prayers} defaultValue="fajr">
        <SelectTrigger size="sm" aria-label="الصلاة (صغير)">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {prayers.map((prayer) => (
            <SelectItem key={prayer.value} value={prayer.value}>
              {prayer.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={prayers} defaultValue="maghrib">
        <SelectTrigger aria-label="الصلاة (افتراضي)">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {prayers.map((prayer) => (
            <SelectItem key={prayer.value} value={prayer.value}>
              {prayer.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
