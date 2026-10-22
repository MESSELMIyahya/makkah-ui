"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const cities = [
  { label: "مكة المكرمة", value: "makkah" },
  { label: "المدينة المنورة", value: "madinah" },
  { label: "جدة", value: "jeddah" },
  { label: "الطائف", value: "taif" },
  { label: "بدر", value: "badr" },
];

function renderCities(values: string[]) {
  if (values.length === 0) {
    return "اختر المدن";
  }

  if (values.length <= 2) {
    return values.map((value) => cities.find((city) => city.value === value)?.label).join("، ");
  }

  return `المدن المختارة: ${values.length}`;
}

export function Preview() {
  return (
    <Select items={cities} multiple defaultValue={["makkah", "madinah", "taif"]}>
      <SelectTrigger aria-label="مدن الرحلة">
        <SelectValue>{renderCities}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem key={city.value} value={city.value}>
            {city.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
