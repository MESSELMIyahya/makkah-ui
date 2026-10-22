"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup variant="outline" defaultValue={["makkah"]} aria-label="Departure city">
      <ToggleGroupItem value="makkah">Makkah</ToggleGroupItem>
      <ToggleGroupItem value="madinah">Madinah</ToggleGroupItem>
      <ToggleGroupItem value="taif" disabled>
        Taif
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
