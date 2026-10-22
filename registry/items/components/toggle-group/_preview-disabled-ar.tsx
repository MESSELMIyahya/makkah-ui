"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup variant="outline" defaultValue={["makkah"]} aria-label="مدينة الانطلاق">
      <ToggleGroupItem value="makkah">مكة المكرمة</ToggleGroupItem>
      <ToggleGroupItem value="madinah">المدينة المنورة</ToggleGroupItem>
      <ToggleGroupItem value="taif" disabled>
        الطائف
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
