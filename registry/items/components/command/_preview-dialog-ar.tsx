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
        بحث سريع
        <kbd className="ms-2 text-xs text-muted-foreground">⌘J</kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="البحث السريع"
        description="ابحث عن المساجد والمواقيت."
      >
        <Command>
          <CommandInput placeholder="اكتب للبحث..." />
          <CommandList>
            <CommandEmpty>لا توجد نتائج.</CommandEmpty>
            <CommandGroup heading="المساجد">
              <CommandItem onSelect={() => setOpen(false)}>
                <IconBuildingMosque />
                المسجد الحرام
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <IconBuildingMosque />
                مسجد القبلتين
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="المواقيت">
              <CommandItem onSelect={() => setOpen(false)}>
                <IconClock />
                مواقيت اليوم
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <IconClock />
                إمساكية رمضان
                <CommandShortcut>⌘R</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
