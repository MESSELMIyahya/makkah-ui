"use client";

import { Label } from "../label/label";
import { Checkbox } from "./checkbox";

export function Preview() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Checkbox id="taraweeh-reminder" defaultChecked />
        <Label htmlFor="taraweeh-reminder">Remind me of Taraweeh prayer</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="iftar-reminder" />
        <div className="grid gap-1.5">
          <Label htmlFor="iftar-reminder">Iftar notification</Label>
          <p className="text-sm text-muted-foreground">Notify me 10 minutes before Maghrib.</p>
        </div>
      </div>
    </div>
  );
}
