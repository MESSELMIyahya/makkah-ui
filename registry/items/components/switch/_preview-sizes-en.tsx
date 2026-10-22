"use client";

import { Label } from "../label/label";
import { Switch } from "./switch";

export function Preview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Switch id="silent-small" size="sm" />
        <Label htmlFor="silent-small">Silent mode in the masjid</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="silent-default" defaultChecked />
        <Label htmlFor="silent-default">Silent mode in the masjid</Label>
      </div>
    </div>
  );
}
