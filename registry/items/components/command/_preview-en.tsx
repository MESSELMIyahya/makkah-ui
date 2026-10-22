"use client";

import { IconBell, IconBuildingMosque, IconCompass, IconMapPin } from "@tabler/icons-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";

export function Preview() {
  return (
    <Command className="max-w-sm border">
      <CommandInput placeholder="Search masjids, cities, or settings..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Masjids">
          <CommandItem>
            <IconBuildingMosque />
            Masjid al-Haram
          </CommandItem>
          <CommandItem>
            <IconBuildingMosque />
            Masjid an-Nabawi
          </CommandItem>
          <CommandItem>
            <IconBuildingMosque />
            Quba Mosque
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Cities">
          <CommandItem>
            <IconMapPin />
            Makkah
          </CommandItem>
          <CommandItem>
            <IconMapPin />
            Madinah
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Prayer settings">
          <CommandItem>
            <IconBell />
            Adhan alerts
          </CommandItem>
          <CommandItem>
            <IconCompass />
            Qibla calibration
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
