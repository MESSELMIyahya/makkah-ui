"use client";

import { Switch } from "../switch/switch";
import { Field, FieldContent, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="adhan-notifications">إشعارات الأذان</FieldLabel>
        <FieldDescription>تشغيل الأذان عند دخول وقت كل صلاة.</FieldDescription>
      </FieldContent>
      <Switch id="adhan-notifications" defaultChecked />
    </Field>
  );
}
