"use client";

import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <NativeSelect aria-label="Adhan voice (disabled)" defaultValue="makkah" disabled>
        <NativeSelectOption value="makkah">Makkah adhan</NativeSelectOption>
        <NativeSelectOption value="madinah">Madinah adhan</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Iqamah delay" defaultValue="10">
        <NativeSelectOption value="5" disabled>
          5 minutes
        </NativeSelectOption>
        <NativeSelectOption value="10">10 minutes</NativeSelectOption>
        <NativeSelectOption value="15">15 minutes</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
