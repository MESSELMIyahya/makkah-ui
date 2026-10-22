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
    label: "Makkah",
    items: [
      { label: "Masjid al-Haram", value: "haram" },
      { label: "Masjid Aisha", value: "aisha" },
    ],
  },
  {
    label: "Madinah",
    items: [
      { label: "Masjid an-Nabawi", value: "nabawi" },
      { label: "Masjid Quba", value: "quba" },
      { label: "Masjid al-Qiblatayn", value: "qiblatayn" },
    ],
  },
];

const items = groups.flatMap((group) => group.items);

export function Preview() {
  return (
    <Select items={items}>
      <SelectTrigger aria-label="Masjid">
        <SelectValue placeholder="Select a masjid" />
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
