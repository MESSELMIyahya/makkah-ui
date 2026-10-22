"use client";

import { Label } from "../label/label";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="guide-notes">ملاحظات لمرشد الرحلة</Label>
      <Textarea id="guide-notes" placeholder="أي طلبات خاصة لرحلة العمرة، مثل توفير كرسي متحرك." />
    </div>
  );
}
