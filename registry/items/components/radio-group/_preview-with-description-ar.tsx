"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

export function Preview() {
  return (
    <RadioGroup defaultValue="standard" aria-label="حساب وقت العصر" className="max-w-sm">
      <Field orientation="horizontal">
        <RadioGroupItem value="standard" id="asr-standard" />
        <FieldContent>
          <FieldLabel htmlFor="asr-standard">الجمهور</FieldLabel>
          <FieldDescription>عندما يصير ظل الشيء مثله (الشافعي والمالكي والحنبلي).</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="hanafi" id="asr-hanafi" />
        <FieldContent>
          <FieldLabel htmlFor="asr-hanafi">الحنفي</FieldLabel>
          <FieldDescription>عندما يصير ظل الشيء مثليه.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  );
}
