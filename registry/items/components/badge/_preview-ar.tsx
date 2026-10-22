"use client";

import { Badge } from "./badge";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>زكاة مدفوعة</Badge>
      <Badge variant="secondary">قيد الانتظار</Badge>
      <Badge variant="destructive">متأخرة</Badge>
      <Badge variant="outline">دون النصاب</Badge>
    </div>
  );
}
