"use client";

import { Input } from "../input/input";
import { Label } from "./label";

export function Preview() {
  return (
    <div data-disabled="true" className="group grid w-full max-w-sm gap-2">
      <Label htmlFor="booking-reference">رقم الحجز</Label>
      <Input id="booking-reference" disabled defaultValue="UMR-1448-0921" />
    </div>
  );
}
