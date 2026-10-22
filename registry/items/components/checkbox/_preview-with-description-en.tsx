"use client";

import { Field, FieldContent, FieldDescription, FieldLabel } from "../field/field";
import { Checkbox } from "./checkbox";

export function Preview() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="share-itinerary" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="share-itinerary">Share itinerary with my group</FieldLabel>
        <FieldDescription>Group members can see your Umrah schedule and hotel.</FieldDescription>
      </FieldContent>
    </Field>
  );
}
