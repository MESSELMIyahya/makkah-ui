"use client";

import { IconNotes } from "@tabler/icons-react";

import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText className="font-medium text-foreground">
          <IconNotes />
          Trip notes
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Ziyarah to Quba after Fajr on Saturday."
        aria-label="Trip notes"
      />
    </InputGroup>
  );
}
