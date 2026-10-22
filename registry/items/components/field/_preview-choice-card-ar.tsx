"use client";

import { RadioGroup, RadioGroupItem } from "../radio-group/radio-group";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./field";

const packages = [
  { value: "economy", title: "اقتصادية", description: "3 ليالٍ مع نقل جماعي." },
  { value: "standard", title: "قياسية", description: "5 ليالٍ في فندق قريب من الحرم." },
  { value: "premium", title: "مميزة", description: "7 ليالٍ في غرفة مطلة على الحرم." },
];

export function Preview() {
  return (
    <RadioGroup defaultValue="standard" aria-label="باقة العمرة" className="max-w-sm">
      {packages.map((item) => (
        <FieldLabel key={item.value} htmlFor={`package-${item.value}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{item.title}</FieldTitle>
              <FieldDescription>{item.description}</FieldDescription>
            </FieldContent>
            <RadioGroupItem value={item.value} id={`package-${item.value}`} />
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  );
}
