"use client";

import { Input } from "../input/input";
import { Label } from "./label";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="pilgrim-name">الاسم الكامل</Label>
      <Input id="pilgrim-name" placeholder="عبدالله الحربي" />
    </div>
  );
}
