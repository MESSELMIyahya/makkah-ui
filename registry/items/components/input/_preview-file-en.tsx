"use client";

import { Label } from "../label/label";
import { Input } from "./input";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="passport-copy">Passport copy</Label>
      <Input id="passport-copy" type="file" />
    </div>
  );
}
