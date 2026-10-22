"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

const groups = [
  {
    label: "مكة المكرمة",
    items: [
      { label: "المسجد الحرام", value: "haram" },
      { label: "مسجد عائشة", value: "aisha" },
    ],
  },
  {
    label: "المدينة المنورة",
    items: [
      { label: "المسجد النبوي", value: "nabawi" },
      { label: "مسجد قباء", value: "quba" },
      { label: "مسجد القبلتين", value: "qiblatayn" },
    ],
  },
];

const items = groups.flatMap((group) => group.items);

export function Preview() {
  return (
    <Select items={items}>
      <SelectTrigger aria-label="المسجد">
        <SelectValue placeholder="اختر مسجدًا" />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group, index) => (
          <SelectGroup key={group.label}>
            {index > 0 && <SelectSeparator />}
            <SelectLabel>{group.label}</SelectLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
