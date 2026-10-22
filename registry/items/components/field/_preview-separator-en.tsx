"use client";

import { Button } from "../button/button";
import { Input } from "../input/input";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "./field";

export function Preview() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="sadaqah-amount">Sadaqah amount (SAR)</FieldLabel>
        <Input id="sadaqah-amount" type="number" min={1} placeholder="100" />
      </Field>
      <FieldSeparator>Or choose</FieldSeparator>
      <Field orientation="horizontal">
        <Button variant="outline">50 SAR</Button>
        <Button variant="outline">100 SAR</Button>
        <Button variant="outline">500 SAR</Button>
      </Field>
    </FieldGroup>
  );
}
