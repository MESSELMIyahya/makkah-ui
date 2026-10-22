"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import { Button } from "./button";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline">
        <IconArrowLeft data-icon="inline-start" className="rtl:-scale-x-100" />
        الشوط السابق
      </Button>
      <Button>
        الشوط التالي
        <IconArrowRight data-icon="inline-end" className="rtl:-scale-x-100" />
      </Button>
    </div>
  );
}
