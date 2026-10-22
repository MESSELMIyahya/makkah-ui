"use client";

import { IconBell } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "./alert";

export function Preview() {
  return (
    <Alert className="max-w-md">
      <IconBell aria-hidden="true" />
      <AlertTitle>صلاة العشاء بعد 15 دقيقة</AlertTitle>
      <AlertDescription>المسجد النبوي · يُرفع الأذان الساعة 8:05 م.</AlertDescription>
    </Alert>
  );
}
