"use client";

import { Checkbox } from "../checkbox/checkbox";
import { Label } from "./label";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="fajr-reminder" defaultChecked />
      <Label htmlFor="fajr-reminder">Remind me before Fajr</Label>
    </div>
  );
}
