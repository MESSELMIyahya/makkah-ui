"use client";

import { IconBellRinging, IconPlus } from "@tabler/icons-react";

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
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBellRinging />
        </EmptyMedia>
        <EmptyTitle>لا توجد تذكيرات بالصلاة بعد</EmptyTitle>
        <EmptyDescription>
          أضف تذكيرًا قبل الفجر أو الظهر أو العصر أو المغرب أو العشاء وسننبّهك في الوقت المناسب.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>
            <IconPlus data-icon="inline-start" />
            إضافة تذكير
          </Button>
          <Button variant="outline">إعدادات الأذان</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
