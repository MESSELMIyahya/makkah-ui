"use client";

import { Input } from "../input/input";
import { Field, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="mobile-number">رقم الجوال</FieldLabel>
      <Input id="mobile-number" type="tel" placeholder="05XXXXXXXX" />
      <FieldDescription>نرسل تذكيرات مواقيت الصلاة عبر الرسائل النصية.</FieldDescription>
    </Field>
  );
}
