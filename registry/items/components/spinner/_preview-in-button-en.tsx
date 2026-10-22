"use client";

import { Button } from "../button/button";
import { Spinner } from "./spinner";

export function Preview() {
  return (
    <Button disabled>
      <Spinner data-icon="inline-start" aria-label="Booking" />
      Confirming your Umrah booking
    </Button>
  );
}
