"use client";

import { Input } from "../input/input";
import { Field, FieldError, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-sm">
      <FieldLabel htmlFor="passport-number">Passport number</FieldLabel>
      <Input
        id="passport-number"
        defaultValue="A12"
        aria-invalid
        aria-describedby="passport-number-error"
      />
      <FieldError id="passport-number-error">Passport number must be 9 characters.</FieldError>
    </Field>
  );
}
