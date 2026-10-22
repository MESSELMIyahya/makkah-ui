"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const days = [
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
];

export function Preview() {
  return (
    <ToggleGroup
      variant="outline"
      size="sm"
      multiple
      defaultValue={["sat", "mon"]}
      aria-label="Halaqah days"
    >
      {days.map((day) => (
        <ToggleGroupItem key={day.value} value={day.value}>
          {day.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
