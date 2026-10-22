"use client";

import { Label } from "../label/label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const masjids = [
  { value: "haram", label: "المسجد الحرام" },
  { value: "nabawi", label: "المسجد النبوي" },
  { value: "quba", label: "مسجد قباء" },
  { value: "qiblatayn", label: "مسجد القبلتين" },
  { value: "aisha", label: "مسجد عائشة" },
  { value: "namirah", label: "مسجد نمرة" },
];

export function Preview() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="masjid">المسجد</Label>
      <Combobox items={masjids}>
        <ComboboxInput id="masjid" placeholder="اختر مسجدًا" />
        <ComboboxContent>
          <ComboboxEmpty>لم يُعثر على مسجد.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof masjids)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
