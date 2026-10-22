"use client";

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <InputGroupText>ر.س</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        type="number"
        inputMode="decimal"
        placeholder="0.00"
        aria-label="المال الخاضع للزكاة"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>الزكاة 2.5%</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
}
