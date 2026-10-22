"use client";

import { Field, FieldLabel } from "../field/field";
import { Checkbox } from "./checkbox";

export function Preview() {
  return (
    <Field orientation="horizontal" data-disabled="true" className="w-fit">
      <Checkbox id="hajj-registration" disabled />
      <FieldLabel htmlFor="hajj-registration">Hajj 1448 registration (closed)</FieldLabel>
    </Field>
  );
}
