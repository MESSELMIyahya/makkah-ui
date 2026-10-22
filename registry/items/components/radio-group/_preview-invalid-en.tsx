"use client";

import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Preview() {
  return (
    <FieldSet className="w-fit">
      <FieldLegend variant="label">Room type</FieldLegend>
      <RadioGroup aria-label="Room type">
        <Field orientation="horizontal" data-invalid="true">
          <RadioGroupItem value="double" id="room-double" aria-invalid />
          <FieldLabel htmlFor="room-double" className="font-normal">
            Double
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid="true">
          <RadioGroupItem value="quad" id="room-quad" aria-invalid />
          <FieldLabel htmlFor="room-quad" className="font-normal">
            Quad
          </FieldLabel>
        </Field>
      </RadioGroup>
      <FieldError>Choose a room type.</FieldError>
    </FieldSet>
  );
}
