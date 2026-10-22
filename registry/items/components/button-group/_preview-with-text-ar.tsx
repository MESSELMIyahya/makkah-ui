"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup, ButtonGroupText } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="وجبات الإفطار">
      <Button variant="outline" size="icon" aria-label="تقليل الوجبات">
        <IconMinus />
      </Button>
      <ButtonGroupText>١٢ وجبة إفطار</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="زيادة الوجبات">
        <IconPlus />
      </Button>
    </ButtonGroup>
  );
}
