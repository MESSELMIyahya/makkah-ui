"use client";

import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { Checkbox } from "./checkbox";

const prayers = [
  { id: "notify-fajr", label: "Fajr", checked: true },
  { id: "notify-dhuhr", label: "Dhuhr", checked: false },
  { id: "notify-asr", label: "Asr", checked: false },
  { id: "notify-maghrib", label: "Maghrib", checked: true },
  { id: "notify-isha", label: "Isha", checked: true },
];

export function Preview() {
  return (
    <FieldSet>
      <FieldLegend variant="label">Notify me for</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        {prayers.map((prayer) => (
          <Field key={prayer.id} orientation="horizontal">
            <Checkbox id={prayer.id} defaultChecked={prayer.checked} />
            <FieldLabel htmlFor={prayer.id} className="font-normal">
              {prayer.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
