"use client";

import { IconCopy, IconSearch } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput readOnly defaultValue="UMR-1448-0921" aria-label="رقم الحجز" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="نسخ رقم الحجز">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="ابحث في الحلقات…" aria-label="ابحث في الحلقات" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">
            <IconSearch />
            بحث
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
