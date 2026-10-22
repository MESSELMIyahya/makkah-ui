"use client";

import { IconHeart } from "@tabler/icons-react";

import { Button } from "./button";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button size="xs">صغير جدًا</Button>
      <Button size="sm">صغير</Button>
      <Button>افتراضي</Button>
      <Button size="lg">كبير</Button>
      <Button size="icon" variant="outline" aria-label="إضافة إلى المفضلة">
        <IconHeart />
      </Button>
    </div>
  );
}
