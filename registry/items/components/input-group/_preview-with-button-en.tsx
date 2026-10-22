"use client";

import { IconCopy, IconSearch } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput readOnly defaultValue="UMR-1448-0921" aria-label="Booking reference" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy booking reference">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Search halaqat…" aria-label="Search halaqat" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">
            <IconSearch />
            Search
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
