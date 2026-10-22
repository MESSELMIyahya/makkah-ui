"use client";

import { Label } from "../label/label";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="special-request">طلب خاص</Label>
      <Textarea
        id="special-request"
        defaultValue="كرسي متحرك"
        aria-invalid
        aria-describedby="special-request-error"
      />
      <p id="special-request-error" className="text-sm text-destructive">
        يُرجى وصف طلبك في 20 حرفًا على الأقل.
      </p>
    </div>
  );
}
