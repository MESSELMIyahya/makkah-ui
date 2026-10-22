"use client";

import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "../field/field";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const transport = [
  { value: "bus", title: "Group bus", description: "Departs Jeddah daily after Fajr." },
  { value: "train", title: "Haramain train", description: "Makkah to Madinah in about 2 hours." },
];

export function Preview() {
  return (
    <RadioGroup defaultValue="train" aria-label="Transport" className="max-w-sm">
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
