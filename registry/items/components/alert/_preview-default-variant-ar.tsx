"use client";

import { IconInfoCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconInfoCircle aria-hidden="true" />
      <AlertTitle>تم تحديث إمساكية رمضان</AlertTitle>
      <AlertDescription>أصبحت أوقات السحور والإفطار تتبع تقويم 1448 لمدينتك.</AlertDescription>
    </Alert>
  );
}
