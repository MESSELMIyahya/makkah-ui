"use client";

import { IconAlertCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <IconAlertCircle aria-hidden="true" />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        The deposit for your Umrah booking could not be processed. Check your card details and try
        again.
      </AlertDescription>
    </Alert>
  );
}
