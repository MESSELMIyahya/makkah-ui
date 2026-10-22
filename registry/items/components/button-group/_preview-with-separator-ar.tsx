"use client";

import { Button } from "../button/button";
import { ButtonGroup, ButtonGroupSeparator } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="التبرع">
      <Button variant="secondary">تصدّق</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">ادفع الزكاة</Button>
    </ButtonGroup>
  );
}
