"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const cities = [
  { label: "Jeddah airport", value: "jeddah" },
  { label: "Madinah airport", value: "madinah" },
  { label: "Taif airport", value: "taif" },
];

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-56">
      <FieldLabel htmlFor="pickup-point">Pickup point</FieldLabel>
      <Select items={cities}>
        <SelectTrigger id="pickup-point" className="w-full" aria-invalid>
          <SelectValue placeholder="Select a pickup point" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError>Choose where we should meet you.</FieldError>
    </Field>
  );
}
