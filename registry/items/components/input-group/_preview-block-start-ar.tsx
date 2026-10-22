"use client";

import { IconNotes } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-medium text-foreground">
          <IconNotes />
          ملاحظات الرحلة
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="زيارة مسجد قباء بعد الفجر يوم السبت."
        aria-label="ملاحظات الرحلة"
      />
    </InputGroup>
  );
}
