"use client";

import { Switch } from "../switch/switch";
import { Field, FieldContent, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="adhan-notifications">Adhan notifications</FieldLabel>
        <FieldDescription>Play the adhan at the start of each prayer time.</FieldDescription>
      </FieldContent>
      <Switch id="adhan-notifications" defaultChecked />
    </Field>
  );
}
