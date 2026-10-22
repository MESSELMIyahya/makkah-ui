"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const packages = [
  { label: "Ramadan Umrah", value: "ramadan", disabled: true },
  { label: "Shawwal Umrah", value: "shawwal", disabled: false },
  { label: "Dhul Qadah Umrah", value: "dhul-qadah", disabled: false },
];

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Select items={packages} defaultValue="shawwal" disabled>
        <SelectTrigger aria-label="Package (disabled)">
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
        <SelectTrigger aria-label="Package">
          <SelectValue placeholder="Select a season" />
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
