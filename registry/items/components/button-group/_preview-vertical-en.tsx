"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Number of pilgrims">
      <Button variant="outline" size="icon" aria-label="Add a pilgrim">
        <IconPlus />
      </Button>
      <Button variant="outline" size="icon" aria-label="Remove a pilgrim">
        <IconMinus />
      </Button>
    </ButtonGroup>
  );
}
