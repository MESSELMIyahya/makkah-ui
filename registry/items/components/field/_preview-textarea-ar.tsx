"use client";

import { Textarea } from "../textarea/textarea";
import { Field, FieldDescription, FieldLabel } from "./field";

export function Preview() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="lecture-feedback">ملاحظاتك على الدرس</FieldLabel>
      <Textarea id="lecture-feedback" placeholder="ما الذي استفدته من درس الليلة؟" />
      <FieldDescription>تساعدنا ملاحظاتك في التخطيط لحلقات الأسبوع القادم.</FieldDescription>
    </Field>
  );
}
