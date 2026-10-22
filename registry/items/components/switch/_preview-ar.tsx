"use client";

import { Label } from "../label/label";
import { Switch } from "./switch";

export function Preview() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-2xl border p-4">
      <div className="grid gap-1.5">
        <Label htmlFor="adhan-alerts">إشعارات الأذان</Label>
        <p className="text-sm text-muted-foreground">تشغيل الأذان عند دخول وقت كل صلاة.</p>
      </div>
      <Switch id="adhan-alerts" defaultChecked />
    </div>
  );
}
