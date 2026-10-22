"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

export function Preview() {
  return (
    <div className="grid justify-items-center gap-3">
      <InputOTP maxLength={4} defaultValue="0921" aria-label="رمز التحقق">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-destructive">الرمز غير صحيح. حاول مرة أخرى.</p>
    </div>
  );
}
