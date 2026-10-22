"use client";

import { RadioGroup, RadioGroupItem } from "../radio-group/radio-group";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "./field";

const packages = [
  { value: "economy", title: "Economy", description: "3 nights, shared transport." },
  { value: "standard", title: "Standard", description: "5 nights, hotel near the Haram." },
  { value: "premium", title: "Premium", description: "7 nights, Haram view room." },
];

export function Preview() {
  return (
    <RadioGroup defaultValue="standard" aria-label="Umrah package" className="max-w-sm">
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
