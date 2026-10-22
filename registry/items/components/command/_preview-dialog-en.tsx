"use client";

import { IconBuildingMosque, IconClock, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { Button } from "../button/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "./command";

export function Preview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "j" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <IconSearch data-icon="inline-start" />
        Quick search
        <kbd className="ms-2 text-xs text-muted-foreground">⌘J</kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Quick search"
        description="Search masjids and prayer times."
      >
        <Command>
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Masjids">
              <CommandItem onSelect={() => setOpen(false)}>
                <IconBuildingMosque />
                Masjid al-Haram
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <IconBuildingMosque />
                Masjid al-Qiblatayn
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Prayer times">
              <CommandItem onSelect={() => setOpen(false)}>
                <IconClock />
                Times for today
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <IconClock />
                Ramadan timetable
                <CommandShortcut>⌘R</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
