"use client";

import { Field, FieldLabel } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Preview() {
  return (
    <RadioGroup defaultValue="umrah" aria-label="نوع الرحلة" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="umrah" id="trip-umrah" />
        <FieldLabel htmlFor="trip-umrah" className="font-normal">
          عمرة
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled="true">
        <RadioGroupItem value="hajj" id="trip-hajj" disabled />
        <FieldLabel htmlFor="trip-hajj" className="font-normal">
          حج (اكتمل العدد)
        </FieldLabel>
      </Field>
    </RadioGroup>
  );
}
