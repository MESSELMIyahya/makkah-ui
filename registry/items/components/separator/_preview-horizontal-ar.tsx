"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="w-full max-w-sm text-sm">
      <p className="font-medium">إمساكية رمضان</p>
      <p className="text-muted-foreground">1 رمضان 1448 هـ</p>
      <Separator className="my-4" />
      <p className="text-muted-foreground">
        ينتهي السحور الساعة 4:42 ص ويبدأ الإفطار الساعة 6:31 م.
      </p>
    </div>
  );
}
