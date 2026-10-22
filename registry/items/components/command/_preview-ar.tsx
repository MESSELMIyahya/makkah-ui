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
      <CommandInput placeholder="ابحث عن مسجد أو مدينة أو إعداد..." />
      <CommandList>
        <CommandEmpty>لا توجد نتائج.</CommandEmpty>
        <CommandGroup heading="المساجد">
          <CommandItem>
            <IconBuildingMosque />
            المسجد الحرام
          </CommandItem>
          <CommandItem>
            <IconBuildingMosque />
            المسجد النبوي
          </CommandItem>
          <CommandItem>
            <IconBuildingMosque />
            مسجد قباء
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="المدن">
          <CommandItem>
            <IconMapPin />
            مكة المكرمة
          </CommandItem>
          <CommandItem>
            <IconMapPin />
            المدينة المنورة
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="إعدادات الصلاة">
          <CommandItem>
            <IconBell />
            تنبيهات الأذان
          </CommandItem>
          <CommandItem>
            <IconCompass />
            معايرة القبلة
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
