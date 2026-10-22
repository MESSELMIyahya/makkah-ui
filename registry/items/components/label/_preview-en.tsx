"use client";

import { Input } from "../input/input";
import { Label } from "./label";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="pilgrim-name">Full name</Label>
      <Input id="pilgrim-name" placeholder="Abdullah Al-Harbi" />
    </div>
  );
}
