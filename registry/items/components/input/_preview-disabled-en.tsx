"use client";

import { Input } from "./input";

export function Preview() {
  return (
    <Input
      disabled
      aria-label="Booking notes"
      placeholder="Bookings are closed during the last ten nights"
      className="max-w-sm"
    />
  );
}
