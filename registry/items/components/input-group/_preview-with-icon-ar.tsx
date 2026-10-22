"use client";

import { IconMail, IconMapPin } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput
          type="email"
          placeholder="name@example.com"
          aria-label="البريد الإلكتروني"
        />
        <InputGroupAddon>
          <IconMail />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="فندق قريب من المسجد النبوي" aria-label="الفندق" />
        <InputGroupAddon>
          <IconMapPin />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
