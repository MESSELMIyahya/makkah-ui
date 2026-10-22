"use client";

import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { Checkbox } from "./checkbox";

const prayers = [
  { id: "notify-fajr", label: "الفجر", checked: true },
  { id: "notify-dhuhr", label: "الظهر", checked: false },
  { id: "notify-asr", label: "العصر", checked: false },
  { id: "notify-maghrib", label: "المغرب", checked: true },
  { id: "notify-isha", label: "العشاء", checked: true },
];

export function Preview() {
  return (
    <FieldSet>
      <FieldLegend variant="label">نبّهني لصلاة</FieldLegend>
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
