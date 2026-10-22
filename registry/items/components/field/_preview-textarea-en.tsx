"use client";

import { Textarea } from "../textarea/textarea";
import { Field, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="lecture-feedback">Lecture feedback</FieldLabel>
      <Textarea id="lecture-feedback" placeholder="What did you benefit from tonight?" />
      <FieldDescription>Your feedback helps us plan next week’s halaqat.</FieldDescription>
    </Field>
  );
}
