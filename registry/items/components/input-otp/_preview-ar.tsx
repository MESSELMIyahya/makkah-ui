"use client";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./input-otp";

export function Preview() {
  return (
    <div className="grid justify-items-center gap-3 text-center">
      <InputOTP maxLength={6} aria-label="رمز التحقق من الحجز">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="max-w-xs text-sm text-muted-foreground">
        أدخل الرمز المرسل إليك لتأكيد حجز العمرة.
      </p>
    </div>
  );
}
