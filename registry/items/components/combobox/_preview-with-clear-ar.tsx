"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const lectures = [
  { value: "seerah", label: "حلقة السيرة النبوية" },
  { value: "fiqh", label: "فقه الصيام" },
  { value: "zakat", label: "أساسيات الزكاة" },
  { value: "hajj", label: "الاستعداد للحج" },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={lectures} defaultValue={lectures[1]}>
        <ComboboxInput showClear placeholder="اختر محاضرة" aria-label="المحاضرة" />
        <ComboboxContent>
          <ComboboxEmpty>لم يُعثر على محاضرة.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof lectures)[number]) => (
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
