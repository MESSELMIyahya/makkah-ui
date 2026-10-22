"use client";

import { IconBell, IconMapPin } from "@tabler/icons-react";

import { Button } from "./button";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button>
        <IconMapPin data-icon="inline-start" />
        أقرب مسجد
      </Button>
      <Button variant="outline">
        تذكير الأذان
        <IconBell data-icon="inline-end" />
      </Button>
    </div>
  );
}
