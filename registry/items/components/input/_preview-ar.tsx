"use client";

import { Label } from "../label/label";
import { Input } from "./input";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="booking-email">البريد الإلكتروني لتأكيد الحجز</Label>
      <Input id="booking-email" type="email" placeholder="name@example.com" />
    </div>
  );
}
