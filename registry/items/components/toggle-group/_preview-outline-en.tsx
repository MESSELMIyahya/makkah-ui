"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup variant="outline" defaultValue={["standard"]} aria-label="Asr calculation method">
      <ToggleGroupItem value="standard">Standard</ToggleGroupItem>
      <ToggleGroupItem value="hanafi">Hanafi</ToggleGroupItem>
    </ToggleGroup>
  );
}
