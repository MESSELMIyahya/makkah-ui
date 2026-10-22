"use client";

import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Preview() {
  return (
    <FieldSet className="w-fit">
      <FieldLegend variant="label">نوع الغرفة</FieldLegend>
      <RadioGroup aria-label="نوع الغرفة">
        <Field orientation="horizontal" data-invalid="true">
          <RadioGroupItem value="double" id="room-double" aria-invalid />
          <FieldLabel htmlFor="room-double" className="font-normal">
            ثنائية
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid="true">
          <RadioGroupItem value="quad" id="room-quad" aria-invalid />
          <FieldLabel htmlFor="room-quad" className="font-normal">
            رباعية
          </FieldLabel>
        </Field>
      </RadioGroup>
      <FieldError>اختر نوع الغرفة.</FieldError>
    </FieldSet>
  );
}
