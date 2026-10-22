"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import { Checkbox } from "./checkbox";

export function Preview() {
  return (
    <div className="grid gap-2">
      <Field orientation="horizontal" data-invalid="true" className="w-fit">
        <Checkbox id="booking-terms" aria-invalid />
        <FieldLabel htmlFor="booking-terms">I agree to the Umrah booking terms</FieldLabel>
      </Field>
      <FieldError>You must accept the terms to continue.</FieldError>
    </div>
  );
}
