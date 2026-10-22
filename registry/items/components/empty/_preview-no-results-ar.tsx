"use client";

import { IconSearchOff } from "@tabler/icons-react";

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
        <EmptyMedia>
          <IconSearchOff className="size-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>لا توجد نتائج بحث</EmptyTitle>
        <EmptyDescription>
          لا توجد حلقات تطابق &quot;تجويد الجمعة&quot;. جرّب يومًا آخر أو موضوعًا أعم.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="ghost">مسح البحث</Button>
      </EmptyContent>
    </Empty>
  );
}
