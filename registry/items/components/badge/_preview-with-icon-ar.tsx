"use client";

import { IconArrowRight, IconRosetteDiscountCheck } from "@tabler/icons-react";

import { Badge } from "./badge";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="secondary">
        <IconRosetteDiscountCheck data-icon="inline-start" />
        حلال معتمد
      </Badge>
      <Badge variant="outline">
        الدرس التالي
        <IconArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
      </Badge>
    </div>
  );
}
