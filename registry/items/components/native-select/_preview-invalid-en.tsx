"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-xs">
      <FieldLabel htmlFor="asr-madhab">Asr calculation</FieldLabel>
      <NativeSelect id="asr-madhab" aria-invalid defaultValue="">
        <NativeSelectOption value="" disabled>
          Select a method
        </NativeSelectOption>
        <NativeSelectOption value="standard">Standard (Shafi, Maliki, Hanbali)</NativeSelectOption>
        <NativeSelectOption value="hanafi">Hanafi</NativeSelectOption>
      </NativeSelect>
      <FieldError>Choose a method to calculate the Asr time.</FieldError>
    </Field>
  );
}
