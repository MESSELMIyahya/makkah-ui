"use client";

import { Switch } from "../switch/switch";
import { Label } from "./label";

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="adhan-sound" defaultChecked />
      <Label htmlFor="adhan-sound">صوت الأذان</Label>
    </div>
  );
}
