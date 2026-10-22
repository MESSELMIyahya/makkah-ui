"use client";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>SAR</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        type="number"
        inputMode="decimal"
        placeholder="0.00"
        aria-label="Zakatable wealth"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>Zakat 2.5%</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
