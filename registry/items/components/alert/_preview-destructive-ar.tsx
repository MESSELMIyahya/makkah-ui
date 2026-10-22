"use client";

import { IconAlertCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <IconAlertCircle aria-hidden="true" />
      <AlertTitle>فشل الدفع</AlertTitle>
      <AlertDescription>
        تعذّر تنفيذ العربون الخاص بحجز العمرة. تحقّق من بيانات البطاقة وحاول مرة أخرى.
      </AlertDescription>
    </Alert>
  );
}
