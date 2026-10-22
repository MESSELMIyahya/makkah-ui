"use client";

import { IconBell, IconCalendar, IconCalculator, IconHeartHandshake } from "@tabler/icons-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "./command";

export function Preview() {
  return (
    <Command className="max-w-sm border">
      <CommandInput placeholder="What would you like to do?" />
      <CommandList>
        <CommandEmpty>No matching commands.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <IconCalculator />
            Zakat calculator
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconHeartHandshake />
            Give sadaqah
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCalendar />
            Convert Hijri date
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
          <CommandItem disabled>
            <IconBell />
            Test adhan sound
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
