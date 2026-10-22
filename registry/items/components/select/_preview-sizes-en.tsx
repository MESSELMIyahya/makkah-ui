"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const prayers = [
  { label: "Fajr", value: "fajr" },
  { label: "Dhuhr", value: "dhuhr" },
  { label: "Asr", value: "asr" },
  { label: "Maghrib", value: "maghrib" },
  { label: "Isha", value: "isha" },
];

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Select items={prayers} defaultValue="fajr">
        <SelectTrigger size="sm" aria-label="Prayer (small)">
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
        <SelectTrigger aria-label="Prayer (default)">
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
