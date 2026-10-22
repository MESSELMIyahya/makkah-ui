"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="ليالي رمضان">
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="الليلة السابقة">
          <IconArrowLeft className="rtl:-scale-x-100" />
        </Button>
        <Button variant="outline" size="icon" aria-label="الليلة التالية">
          <IconArrowRight className="rtl:-scale-x-100" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">الليلة ١</Button>
        <Button variant="outline">الليلة ٢</Button>
        <Button variant="outline">الليلة ٣</Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
