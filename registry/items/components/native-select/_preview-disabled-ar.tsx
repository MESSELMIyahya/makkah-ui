"use client";

import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <NativeSelect aria-label="صوت الأذان (معطّل)" defaultValue="makkah" disabled>
        <NativeSelectOption value="makkah">أذان مكة</NativeSelectOption>
        <NativeSelectOption value="madinah">أذان المدينة</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="مدة انتظار الإقامة" defaultValue="10">
        <NativeSelectOption value="5" disabled>
          5 دقائق
        </NativeSelectOption>
        <NativeSelectOption value="10">10 دقائق</NativeSelectOption>
        <NativeSelectOption value="15">15 دقيقة</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
