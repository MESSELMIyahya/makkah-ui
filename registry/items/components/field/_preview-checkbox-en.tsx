"use client";

import { Checkbox } from "../checkbox/checkbox";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./field";

const reminders = [
  { id: "reminder-jumuah", label: "Jumu'ah khutbah", checked: true },
  { id: "reminder-taraweeh", label: "Taraweeh prayer", checked: true },
  { id: "reminder-lectures", label: "Weekly lectures", checked: false },
];

export function Preview() {
  return (
    <FieldSet>
      <FieldLegend variant="label">Masjid reminders</FieldLegend>
      <FieldGroup data-slot="checkbox-group">
        {reminders.map((reminder) => (
          <Field key={reminder.id} orientation="horizontal">
            <Checkbox id={reminder.id} defaultChecked={reminder.checked} />
            <FieldLabel htmlFor={reminder.id} className="font-normal">
              {reminder.label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
