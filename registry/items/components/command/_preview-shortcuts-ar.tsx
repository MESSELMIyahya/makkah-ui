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
      <CommandInput placeholder="ماذا تريد أن تفعل؟" />
      <CommandList>
        <CommandEmpty>لا توجد أوامر مطابقة.</CommandEmpty>
        <CommandGroup heading="إجراءات">
          <CommandItem>
            <IconCalculator />
            حاسبة الزكاة
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconHeartHandshake />
            تبرع بصدقة
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <IconCalendar />
            تحويل التاريخ الهجري
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
          <CommandItem disabled>
            <IconBell />
            اختبار صوت الأذان
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
