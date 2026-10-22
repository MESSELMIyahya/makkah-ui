"use client";

import { IconCoins } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconCoins aria-hidden="true" />
      <AlertTitle>تذكير بالزكاة</AlertTitle>
      <AlertDescription>يكتمل حولك في 1 رمضان 1448.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          احسب
        </Button>
      </AlertAction>
    </Alert>
  );
}
