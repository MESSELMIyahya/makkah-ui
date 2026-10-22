"use client";

import { Input } from "../input/input";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./field";

export function Preview() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Zakat calculator</FieldLegend>
      <FieldDescription>Enter the value of assets held for one lunar year.</FieldDescription>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="zakat-cash">Cash (SAR)</FieldLabel>
            <Input id="zakat-cash" type="number" min={0} placeholder="20000" />
          </Field>
          <Field>
            <FieldLabel htmlFor="zakat-gold">Gold (SAR)</FieldLabel>
            <Input id="zakat-gold" type="number" min={0} placeholder="8000" />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="zakat-debts">Debts due (SAR)</FieldLabel>
          <Input id="zakat-debts" type="number" min={0} placeholder="0" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
