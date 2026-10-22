"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { Switch } from "./switch";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="hijri-dates">Show Hijri dates</FieldLabel>
        <FieldDescription>Display 1 Ramadan 1448 next to the Gregorian date.</FieldDescription>
      </FieldContent>
      <Switch id="hijri-dates" defaultChecked />
    </Field>
  );
}
