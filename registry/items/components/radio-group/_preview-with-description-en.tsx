"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Preview() {
  return (
    <RadioGroup defaultValue="standard" aria-label="Asr calculation" className="max-w-sm">
      <Field orientation="horizontal">
        <RadioGroupItem value="standard" id="asr-standard" />
        <FieldContent>
          <FieldLabel htmlFor="asr-standard">Standard</FieldLabel>
          <FieldDescription>
            Shadow equals the object length (Shafi’i, Maliki, Hanbali).
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="hanafi" id="asr-hanafi" />
        <FieldContent>
          <FieldLabel htmlFor="asr-hanafi">Hanafi</FieldLabel>
          <FieldDescription>Shadow equals twice the object length.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  );
}
