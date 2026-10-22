"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup, ButtonGroupText } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="Iftar meals">
      <Button variant="outline" size="icon" aria-label="Fewer meals">
        <IconMinus />
      </Button>
      <ButtonGroupText>12 iftar meals</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="More meals">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}
