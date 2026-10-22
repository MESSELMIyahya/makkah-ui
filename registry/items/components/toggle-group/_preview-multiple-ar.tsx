"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const days = [
  { value: "sat", label: "السبت" },
  { value: "sun", label: "الأحد" },
  { value: "mon", label: "الإثنين" },
  { value: "tue", label: "الثلاثاء" },
  { value: "wed", label: "الأربعاء" },
];

export function Preview() {
  return (
    <ToggleGroup
      variant="outline"
      size="sm"
      multiple
      defaultValue={["sat", "mon"]}
      aria-label="أيام الحلقة"
    >
      {days.map((day) => (
        <ToggleGroupItem key={day.value} value={day.value}>
          {day.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
