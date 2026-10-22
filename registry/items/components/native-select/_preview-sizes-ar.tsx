"use client";

import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <NativeSelect size="sm" aria-label="حساب العصر (صغير)" defaultValue="standard">
        <NativeSelectOption value="standard">
          الجمهور (الشافعي، المالكي، الحنبلي)
        </NativeSelectOption>
        <NativeSelectOption value="hanafi">الحنفي</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="حساب العصر" defaultValue="hanafi">
        <NativeSelectOption value="standard">
          الجمهور (الشافعي، المالكي، الحنبلي)
        </NativeSelectOption>
        <NativeSelectOption value="hanafi">الحنفي</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
