"use client";

import { IconCalendarOff } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

export function Preview() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCalendarOff />
        </EmptyMedia>
        <EmptyTitle>لا توجد حجوزات</EmptyTitle>
        <EmptyDescription>ليس لديك حجوزات عمرة أو حج قادمة. تصفّح باقات شوال 1448.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">تصفّح الباقات</Button>
      </EmptyContent>
    </Empty>
  );
}
