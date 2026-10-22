"use client";

import { Button } from "./button";

export function Preview() {
  return (
    <Button
      variant="outline"
      nativeButton={false}
      // oxlint-disable-next-line jsx-a11y/control-has-associated-label -- Label is provided by the Button children.
      render={<a href="#ramadan-schedule" />}
    >
      جدول إمساكية رمضان
    </Button>
  );
}
