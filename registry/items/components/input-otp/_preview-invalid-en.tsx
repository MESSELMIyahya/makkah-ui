"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

export function Preview() {
  return (
    <div className="grid justify-items-center gap-3">
      <InputOTP maxLength={4} defaultValue="0921" aria-label="Verification code">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-destructive">The code is incorrect. Try again.</p>
    </div>
  );
}
