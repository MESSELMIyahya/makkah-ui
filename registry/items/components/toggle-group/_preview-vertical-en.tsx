"use client";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export function Preview() {
  return (
    <ToggleGroup
      variant="outline"
      spacing={0}
      orientation="vertical"
      defaultValue={["economy"]}
      aria-label="Umrah package"
    >
      <ToggleGroupItem value="economy">Economy</ToggleGroupItem>
      <ToggleGroupItem value="comfort">Comfort</ToggleGroupItem>
      <ToggleGroupItem value="premium">Premium</ToggleGroupItem>
    </ToggleGroup>
  );
}
