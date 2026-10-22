"use client";

import { Field, FieldError, FieldLabel } from "../field/field";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const areas = [
  { value: "ajyad", label: "Ajyad district" },
  { value: "aziziyah", label: "Aziziyah district" },
  { value: "misfalah", label: "Misfalah district" },
];

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-xs">
      <FieldLabel htmlFor="hotel-area">Hotel area</FieldLabel>
      <Combobox items={areas}>
        <ComboboxInput id="hotel-area" aria-invalid placeholder="Choose an area" />
        <ComboboxContent>
          <ComboboxEmpty>No area found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof areas)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError>Choose where you would like to stay in Makkah.</FieldError>
    </Field>
  );
}
