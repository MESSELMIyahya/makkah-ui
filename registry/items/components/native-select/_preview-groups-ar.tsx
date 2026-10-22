"use client";

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <NativeSelect aria-label="الشهر الهجري" defaultValue="ramadan">
      <NativeSelectOptGroup label="الأشهر الحرم">
        <NativeSelectOption value="muharram">محرم</NativeSelectOption>
        <NativeSelectOption value="rajab">رجب</NativeSelectOption>
        <NativeSelectOption value="dhul-qadah">ذو القعدة</NativeSelectOption>
        <NativeSelectOption value="dhul-hijjah">ذو الحجة</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="أشهر أخرى">
        <NativeSelectOption value="safar">صفر</NativeSelectOption>
        <NativeSelectOption value="shaban">شعبان</NativeSelectOption>
        <NativeSelectOption value="ramadan">رمضان</NativeSelectOption>
        <NativeSelectOption value="shawwal">شوال</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
