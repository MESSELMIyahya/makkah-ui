"use client";

import { Label } from "../label/label";
import { Input } from "./input";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="invalid-email">Email</Label>
      <Input
        id="invalid-email"
        type="email"
        defaultValue="ahmad@"
        aria-invalid
        aria-describedby="invalid-email-error"
      />
      <p id="invalid-email-error" className="text-sm text-destructive">
        Enter a valid email address.
      </p>
    </div>
  );
}
