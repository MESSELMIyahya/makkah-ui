"use client";

import { Button } from "../button/button";
import { ButtonGroup, ButtonGroupSeparator } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="Donation">
      <Button variant="secondary">Give sadaqah</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Pay zakat</Button>
    </ButtonGroup>
  );
}
