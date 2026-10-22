"use client";

import { IconBell } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconBell aria-hidden="true" />
      <AlertTitle>Isha prayer in 15 minutes</AlertTitle>
      <AlertDescription>Masjid an-Nabawi · The adhan is at 8:05 PM.</AlertDescription>
    </Alert>
  );
}
