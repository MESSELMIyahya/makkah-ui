"use client";

import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <NativeSelect size="sm" aria-label="Asr calculation (small)" defaultValue="standard">
        <NativeSelectOption value="standard">Standard (Shafi, Maliki, Hanbali)</NativeSelectOption>
        <NativeSelectOption value="hanafi">Hanafi</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Asr calculation" defaultValue="hanafi">
        <NativeSelectOption value="standard">Standard (Shafi, Maliki, Hanbali)</NativeSelectOption>
        <NativeSelectOption value="hanafi">Hanafi</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
