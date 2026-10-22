"use client";

import { Label } from "../label/label";
import { NativeSelect, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="prayer-city">المدينة</Label>
      <NativeSelect id="prayer-city" defaultValue="">
        <NativeSelectOption value="" disabled>
          اختر مدينة
        </NativeSelectOption>
        <NativeSelectOption value="makkah">مكة المكرمة</NativeSelectOption>
        <NativeSelectOption value="madinah">المدينة المنورة</NativeSelectOption>
        <NativeSelectOption value="jeddah">جدة</NativeSelectOption>
        <NativeSelectOption value="riyadh">الرياض</NativeSelectOption>
        <NativeSelectOption value="taif">الطائف</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
