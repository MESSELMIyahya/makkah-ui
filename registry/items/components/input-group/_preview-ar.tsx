"use client";

import { IconSearch } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="ابحث عن مسجد…" aria-label="ابحث عن مسجد" />
      <InputGroupAddon>
        <IconSearch />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>12 نتيجة</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
