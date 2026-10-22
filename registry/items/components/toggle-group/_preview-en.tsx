"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const prayers = [
  { value: "fajr", label: "Fajr" },
  { value: "dhuhr", label: "Dhuhr" },
  { value: "asr", label: "Asr" },
  { value: "maghrib", label: "Maghrib" },
  { value: "isha", label: "Isha" },
];

export function Preview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium">Adhan reminders</p>
      <ToggleGroup
        variant="outline"
        spacing={0}
        multiple
        defaultValue={["fajr", "maghrib"]}
        aria-label="Adhan reminders"
      >
        {prayers.map((prayer) => (
          <ToggleGroupItem key={prayer.value} value={prayer.value}>
            {prayer.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
