"use client";

import { Field, FieldLabel } from "../field/field";
import { Switch } from "./switch";

export function Preview() {
  return (
    <Field orientation="horizontal" data-disabled="true" className="w-fit">
      <Switch id="auto-location" disabled defaultChecked />
      <FieldLabel htmlFor="auto-location">تحديد المدينة تلقائيًا</FieldLabel>
    </Field>
  );
}
