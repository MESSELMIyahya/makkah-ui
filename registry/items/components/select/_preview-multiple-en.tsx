"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const cities = [
  { label: "Makkah", value: "makkah" },
  { label: "Madinah", value: "madinah" },
  { label: "Jeddah", value: "jeddah" },
  { label: "Taif", value: "taif" },
  { label: "Badr", value: "badr" },
];

function renderCities(values: string[]) {
  if (values.length === 0) {
    return "Select cities";
  }

  if (values.length <= 2) {
    return values.map((value) => cities.find((city) => city.value === value)?.label).join(", ");
  }

  return `${values.length} cities selected`;
}

export function Preview() {
  return (
    <Select items={cities} multiple defaultValue={["makkah", "madinah", "taif"]}>
      <SelectTrigger aria-label="Itinerary cities">
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
