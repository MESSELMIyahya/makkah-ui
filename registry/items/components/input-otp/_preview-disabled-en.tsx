"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

export function Preview() {
  return (
    <InputOTP maxLength={4} value="1448" disabled aria-label="Expired code">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
