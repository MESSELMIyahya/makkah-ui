"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const prayers = [
  { value: "fajr", label: "الفجر" },
  { value: "dhuhr", label: "الظهر" },
  { value: "asr", label: "العصر" },
  { value: "maghrib", label: "المغرب" },
  { value: "isha", label: "العشاء" },
];

export function Preview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm font-medium">تنبيهات الأذان</p>
      <ToggleGroup
        variant="outline"
        spacing={0}
        multiple
        defaultValue={["fajr", "maghrib"]}
        aria-label="تنبيهات الأذان"
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
