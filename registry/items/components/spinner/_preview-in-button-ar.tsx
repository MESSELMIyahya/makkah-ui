"use client";

import { Button } from "../button/button";
import { Spinner } from "./spinner";

export function Preview() {
  return (
    <Button disabled>
      <Spinner data-icon="inline-start" aria-label="جارٍ الحجز" />
      جارٍ تأكيد حجز العمرة
    </Button>
  );
}
