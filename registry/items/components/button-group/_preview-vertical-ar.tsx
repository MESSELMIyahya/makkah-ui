"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup orientation="vertical" aria-label="عدد المعتمرين">
      <Button variant="outline" size="icon" aria-label="إضافة معتمر">
        <IconPlus />
      </Button>
      <Button variant="outline" size="icon" aria-label="إزالة معتمر">
        <IconMinus />
      </Button>
    </ButtonGroup>
  );
}
