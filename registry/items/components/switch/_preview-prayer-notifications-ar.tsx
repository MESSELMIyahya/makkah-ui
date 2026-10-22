"use client";

import { useState } from "react";

import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "../field/field";
import { Switch } from "./switch";

const prayers = [
  { id: "fajr", label: "الفجر", time: "4:52" },
  { id: "dhuhr", label: "الظهر", time: "12:18" },
  { id: "asr", label: "العصر", time: "3:41" },
  { id: "maghrib", label: "المغرب", time: "6:31" },
  { id: "isha", label: "العشاء", time: "8:01" },
];

export function Preview() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({ fajr: true, maghrib: true });
  const count = prayers.filter((prayer) => enabled[prayer.id]).length;

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">
        إشعارات الصلوات ({count}/{prayers.length})
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
