"use client";

import { IconLayoutGrid, IconList, IconMap } from "@tabler/icons-react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup defaultValue={["list"]} aria-label="Masjid directory view">
      <ToggleGroupItem value="list" aria-label="List view">
        <IconList />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <IconLayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="map" aria-label="Map view">
        <IconMap />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
