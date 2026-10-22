"use client";

import { useState } from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";

export function Preview() {
  const [code, setCode] = useState("");

  return (
    <div className="grid justify-items-center gap-3">
      <InputOTP maxLength={6} value={code} onChange={setCode} aria-label="Verification code">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        {code === "" ? "Enter your one-time code." : `You entered: ${code}`}
      </p>
    </div>
  );
}
