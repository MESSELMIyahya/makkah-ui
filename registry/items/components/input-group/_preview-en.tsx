"use client";

import { IconSearch } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Search masjids…" aria-label="Search masjids" />
      <InputGroupAddon>
        <IconSearch />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>12 results</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
