"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="Ramadan nights">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Previous night">
          <IconArrowLeft className="rtl:-scale-x-100" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Next night">
          <IconArrowRight className="rtl:-scale-x-100" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Night 1</Button>
        <Button variant="outline">Night 2</Button>
        <Button variant="outline">Night 3</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
