"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const packages = [
  { label: "عمرة رمضان", value: "ramadan", disabled: true },
  { label: "عمرة شوال", value: "shawwal", disabled: false },
  { label: "عمرة ذي القعدة", value: "dhul-qadah", disabled: false },
];

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Select items={packages} defaultValue="shawwal" disabled>
        <SelectTrigger aria-label="الباقة (معطلة)">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {packages.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select items={packages}>
        <SelectTrigger aria-label="الباقة">
          <SelectValue placeholder="اختر الموسم" />
        </SelectTrigger>
        <SelectContent>
          {packages.map((item) => (
            <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
