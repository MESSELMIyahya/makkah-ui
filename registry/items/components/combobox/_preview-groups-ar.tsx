"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "./combobox";

type Masjid = { value: string; label: string };

const groups: { value: string; items: Masjid[] }[] = [
  {
    value: "مكة المكرمة",
    items: [
      { value: "haram", label: "المسجد الحرام" },
      { value: "aisha", label: "مسجد عائشة" },
      { value: "namirah", label: "مسجد نمرة" },
    ],
  },
  {
    value: "المدينة المنورة",
    items: [
      { value: "nabawi", label: "المسجد النبوي" },
      { value: "quba", label: "مسجد قباء" },
      { value: "qiblatayn", label: "مسجد القبلتين" },
    ],
  },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={groups}>
        <ComboboxInput placeholder="اختر مسجدًا" aria-label="المسجد" />
        <ComboboxContent>
          <ComboboxEmpty>لم يُعثر على مسجد.</ComboboxEmpty>
          <ComboboxList>
            {(group: (typeof groups)[number]) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item: Masjid) => (
                    <ComboboxItem key={item.value} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
