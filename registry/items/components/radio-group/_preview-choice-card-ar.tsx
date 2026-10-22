"use client";

import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const transport = [
  { value: "bus", title: "حافلة جماعية", description: "تنطلق من جدة يوميًا بعد الفجر." },
  { value: "train", title: "قطار الحرمين", description: "من مكة إلى المدينة في نحو ساعتين." },
];

export function Preview() {
  return (
    <RadioGroup defaultValue="train" aria-label="وسيلة النقل" className="max-w-sm">
      {transport.map((item) => (
        <FieldLabel key={item.value} htmlFor={`transport-${item.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{item.title}</FieldTitle>
              <FieldDescription>{item.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem value={item.value} id={`transport-${item.value}`} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
