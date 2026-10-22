"use client";

import { Label } from "../label/label";
import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="prayer-city">City</Label>
      <NativeSelect id="prayer-city" defaultValue="">
        <NativeSelectOption value="" disabled>
          Select a city
        </NativeSelectOption>
        <NativeSelectOption value="makkah">Makkah</NativeSelectOption>
        <NativeSelectOption value="madinah">Madinah</NativeSelectOption>
        <NativeSelectOption value="jeddah">Jeddah</NativeSelectOption>
        <NativeSelectOption value="riyadh">Riyadh</NativeSelectOption>
        <NativeSelectOption value="taif">Taif</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
