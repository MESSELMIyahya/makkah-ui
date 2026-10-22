"use client";

import { Label } from "../label/label";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="guide-notes">Notes for the tour guide</Label>
      <Textarea
        id="guide-notes"
        placeholder="Any special requests for your Umrah trip, such as wheelchair assistance."
      />
    </div>
  );
}
