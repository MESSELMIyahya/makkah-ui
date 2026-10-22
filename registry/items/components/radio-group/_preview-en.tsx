"use client";

import { Label } from "../label/label";
import { RadioGroup, RadioGroupItem } from "./radio-group";

const methods = [
  { value: "umm-al-qura", label: "Umm al-Qura, Makkah" },
  { value: "mwl", label: "Muslim World League" },
  { value: "egypt", label: "Egyptian General Authority of Survey" },
];

export function Preview() {
  return (
    <RadioGroup
      defaultValue="umm-al-qura"
      aria-label="Prayer time calculation method"
      className="w-fit"
    >
      {methods.map((method) => (
        <div key={method.value} className="flex items-center gap-3">
          <RadioGroupItem value={method.value} id={`method-${method.value}`} />
          <Label htmlFor={`method-${method.value}`}>{method.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
