"use client";

import { Badge } from "./badge";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Zakat paid</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Overdue</Badge>
      <Badge variant="outline">Below nisab</Badge>
    </div>
  );
}
