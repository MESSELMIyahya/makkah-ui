"use client";

import { Label } from "../label/label";
import { Input } from "./input";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="zakat-savings">Cash savings (SAR)</Label>
      <Input id="zakat-savings" type="number" inputMode="decimal" min={0} placeholder="15000" />
    </div>
  );
}
