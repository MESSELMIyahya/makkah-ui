"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const cities = [
  { label: "مطار جدة", value: "jeddah" },
  { label: "مطار المدينة", value: "madinah" },
  { label: "مطار الطائف", value: "taif" },
];

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-56">
      <FieldLabel htmlFor="pickup-point">نقطة الاستقبال</FieldLabel>
      <Select items={cities}>
        <SelectTrigger id="pickup-point" className="w-full" aria-invalid>
          <SelectValue placeholder="اختر نقطة الاستقبال" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError>اختر المكان الذي نستقبلك فيه.</FieldError>
    </Field>
  );
}
