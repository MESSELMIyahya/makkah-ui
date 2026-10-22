"use client";

import { Label } from "../label/label";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="halaqa-question">Question for the halaqa</Label>
      <Textarea id="halaqa-question" aria-describedby="halaqa-question-hint" />
      <p id="halaqa-question-hint" className="text-sm text-muted-foreground">
        The sheikh answers selected questions after Isha.
      </p>
    </div>
  );
}
