"use client";

import { IconCalendarEvent, IconChevronDown, IconShare } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ButtonGroup aria-label="إجراءات المحاضرة">
        <Button variant="outline">
          <IconCalendarEvent data-icon="inline-start" />
          أضف إلى التقويم
        </Button>
        <Button variant="outline">
          <IconShare data-icon="inline-start" />
          مشاركة
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="حجز العمرة">
        <Button>احجز العمرة</Button>
        <Button size="icon" aria-label="خيارات حجز إضافية">
          <IconChevronDown />
        </Button>
      </ButtonGroup>
    </div>
  );
}
