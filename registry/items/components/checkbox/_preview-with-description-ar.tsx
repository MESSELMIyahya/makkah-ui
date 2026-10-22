"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { Checkbox } from "./checkbox";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="share-itinerary" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="share-itinerary">مشاركة برنامج الرحلة مع مجموعتي</FieldLabel>
        <FieldDescription>يمكن لأفراد المجموعة رؤية جدول عمرتك والفندق.</FieldDescription>
      </FieldContent>
    </Field>
  );
}
