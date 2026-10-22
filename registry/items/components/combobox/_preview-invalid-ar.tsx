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
  { value: "ajyad", label: "حي أجياد" },
  { value: "aziziyah", label: "حي العزيزية" },
  { value: "misfalah", label: "حي المسفلة" },
];

export function Preview() {
  return (
    <Field data-invalid="true" className="max-w-xs">
      <FieldLabel htmlFor="hotel-area">منطقة الفندق</FieldLabel>
      <Combobox items={areas}>
        <ComboboxInput id="hotel-area" aria-invalid placeholder="اختر منطقة" />
        <ComboboxContent>
          <ComboboxEmpty>لم يُعثر على منطقة.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof areas)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldError>اختر المنطقة التي تفضّل الإقامة فيها في مكة.</FieldError>
    </Field>
  );
}
