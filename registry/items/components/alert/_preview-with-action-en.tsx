"use client";

import { IconCoins } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconCoins aria-hidden="true" />
      <AlertTitle>Zakat reminder</AlertTitle>
      <AlertDescription>Your hawl completes on 1 Ramadan 1448.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          Calculate
        </Button>
      </AlertAction>
    </Alert>
  );
}
