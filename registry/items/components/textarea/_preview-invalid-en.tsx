"use client";

import { Label } from "../label/label";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="special-request">Special request</Label>
      <Textarea
        id="special-request"
        defaultValue="Wheelchair"
        aria-invalid
        aria-describedby="special-request-error"
      />
      <p id="special-request-error" className="text-sm text-destructive">
        Describe your request in at least 20 characters.
      </p>
    </div>
  );
}
