"use client";

import { Button } from "../button/button";
import { Input } from "../input/input";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "./field";

export function Preview() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="sadaqah-amount">مبلغ الصدقة (ريال)</FieldLabel>
        <Input id="sadaqah-amount" type="number" min={1} placeholder="100" />
      </Field>
      <FieldSeparator>أو اختر</FieldSeparator>
      <Field orientation="horizontal">
        <Button variant="outline">50 ريال</Button>
        <Button variant="outline">100 ريال</Button>
        <Button variant="outline">500 ريال</Button>
      </Field>
    </FieldGroup>
  );
}
