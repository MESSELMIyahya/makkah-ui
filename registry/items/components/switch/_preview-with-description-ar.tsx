"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { Switch } from "./switch";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="hijri-dates">عرض التاريخ الهجري</FieldLabel>
        <FieldDescription>عرض تاريخ مثل 1 رمضان 1448 بجانب التاريخ الميلادي.</FieldDescription>
      </FieldContent>
      <Switch id="hijri-dates" defaultChecked />
    </Field>
  );
}
