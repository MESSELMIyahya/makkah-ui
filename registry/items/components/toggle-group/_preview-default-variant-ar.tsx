"use client";

import { IconLayoutGrid, IconList, IconMap } from "@tabler/icons-react";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup defaultValue={["list"]} aria-label="طريقة عرض دليل المساجد">
      <ToggleGroupItem value="list" aria-label="عرض القائمة">
        <IconList />
      </ToggleGroupItem>
      <ToggleGroupItem value="grid" aria-label="عرض الشبكة">
        <IconLayoutGrid />
      </ToggleGroupItem>
      <ToggleGroupItem value="map" aria-label="عرض الخريطة">
        <IconMap />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
