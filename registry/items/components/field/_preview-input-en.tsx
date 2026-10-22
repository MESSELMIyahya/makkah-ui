"use client";

import { Input } from "../input/input";
import { Field, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="mobile-number">Mobile number</FieldLabel>
      <Input id="mobile-number" type="tel" placeholder="05XXXXXXXX" />
      <FieldDescription>We send prayer time reminders by SMS.</FieldDescription>
    </Field>
  );
}
