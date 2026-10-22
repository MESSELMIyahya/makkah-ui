"use client";

import { useState } from "react";

import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { Switch } from "./switch";

const prayers = [
  { id: "fajr", label: "Fajr", time: "4:52" },
  { id: "dhuhr", label: "Dhuhr", time: "12:18" },
  { id: "asr", label: "Asr", time: "3:41" },
  { id: "maghrib", label: "Maghrib", time: "6:31" },
  { id: "isha", label: "Isha", time: "8:01" },
];

export function Preview() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({ fajr: true, maghrib: true });
  const count = prayers.filter((prayer) => enabled[prayer.id]).length;

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">
        Prayer notifications ({count}/{prayers.length})
      </FieldLegend>
      <FieldGroup className="gap-3">
        {prayers.map((prayer) => (
          <Field key={prayer.id} orientation="horizontal">
            <FieldLabel htmlFor={`prayer-${prayer.id}`} className="font-normal">
              {prayer.label}
              <span className="text-muted-foreground tabular-nums">{prayer.time}</span>
            </FieldLabel>
            <Switch
              id={`prayer-${prayer.id}`}
              size="sm"
              checked={enabled[prayer.id] ?? false}
              onCheckedChange={(checked) =>
                setEnabled((current) => ({ ...current, [prayer.id]: checked }))
              }
            />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  );
}
