"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup variant="outline" defaultValue={["standard"]} aria-label="طريقة حساب العصر">
      <ToggleGroupItem value="standard">الجمهور</ToggleGroupItem>
      <ToggleGroupItem value="hanafi">الحنفي</ToggleGroupItem>
    </ToggleGroup>
  );
}
