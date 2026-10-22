"use client";

import { IconCircleCheck } from "@tabler/icons-react";

import { Alert, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconCircleCheck aria-hidden="true" />
      <AlertTitle>تم استلام صدقتك بنجاح.</AlertTitle>
    </Alert>
  );
}
