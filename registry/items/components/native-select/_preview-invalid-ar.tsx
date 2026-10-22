"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-xs">
      <FieldLabel htmlFor="asr-madhab">حساب وقت العصر</FieldLabel>
      <NativeSelect id="asr-madhab" aria-invalid defaultValue="">
        <NativeSelectOption value="" disabled>
          اختر طريقة الحساب
        </NativeSelectOption>
        <NativeSelectOption value="standard">
          الجمهور (الشافعي، المالكي، الحنبلي)
        </NativeSelectOption>
        <NativeSelectOption value="hanafi">الحنفي</NativeSelectOption>
      </NativeSelect>
      <FieldError>اختر طريقة لحساب وقت العصر.</FieldError>
    </Field>
  );
}
