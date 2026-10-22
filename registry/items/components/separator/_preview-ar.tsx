"use client";

import { Separator } from "./separator";

export function Preview() {
  return (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">المسجد الحرام</h4>
        <p className="text-sm text-muted-foreground">مواقيت الصلاة اليومية والدروس وخدمات الزوار.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>الصلوات</span>
        <Separator orientation="vertical" />
        <span>الدروس</span>
        <Separator orientation="vertical" />
        <span>الخدمات</span>
      </div>
    </div>
  );
}
