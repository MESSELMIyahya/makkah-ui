"use client";

import { IconInfoCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconInfoCircle aria-hidden="true" />
      <AlertTitle>Ramadan timetable updated</AlertTitle>
      <AlertDescription>
        Suhoor and iftar times now follow the 1448 calendar for your city.
      </AlertDescription>
    </Alert>
  );
}
