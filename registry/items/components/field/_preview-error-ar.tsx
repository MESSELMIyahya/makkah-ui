"use client";

import { Input } from "../input/input";
import { Field, FieldError, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-sm">
      <FieldLabel htmlFor="passport-number">رقم الجواز</FieldLabel>
      <Input
        id="passport-number"
        defaultValue="A12"
        aria-invalid
        aria-describedby="passport-number-error"
      />
      <FieldError id="passport-number-error">يجب أن يتكوّن رقم الجواز من 9 خانات.</FieldError>
    </Field>
  );
}
