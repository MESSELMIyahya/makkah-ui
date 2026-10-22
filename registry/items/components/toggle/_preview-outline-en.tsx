"use client";

import { IconBuildingMosque } from "@tabler/icons-react";

import { Toggle } from "./toggle";

export function Preview() {
  return (
    <Toggle variant="outline">
      <IconBuildingMosque data-icon="inline-start" />
      Favorite masjid
    </Toggle>
  );
}
