"use client";

import { IconId } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <InputGroup>
        <InputGroupInput
          defaultValue="A12"
          aria-invalid
          aria-label="Passport number"
          aria-describedby="passport-error"
        />
        <InputGroupAddon>
          <IconId />
        </InputGroupAddon>
      </InputGroup>
      <p id="passport-error" className="text-sm text-destructive">
        Passport number must be 9 characters.
      </p>
    </div>
  );
}
