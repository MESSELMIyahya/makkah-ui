"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup
      variant="outline"
      spacing={0}
      orientation="vertical"
      defaultValue={["economy"]}
      aria-label="باقة العمرة"
    >
      <ToggleGroupItem value="economy">اقتصادية</ToggleGroupItem>
      <ToggleGroupItem value="comfort">مريحة</ToggleGroupItem>
      <ToggleGroupItem value="premium">مميزة</ToggleGroupItem>
    </ToggleGroup>
  );
}
