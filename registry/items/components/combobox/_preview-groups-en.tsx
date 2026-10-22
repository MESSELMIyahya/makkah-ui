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
    value: "Makkah",
    items: [
      { value: "haram", label: "Masjid al-Haram" },
      { value: "aisha", label: "Masjid Aisha" },
      { value: "namirah", label: "Masjid Namirah" },
    ],
  },
  {
    value: "Madinah",
    items: [
      { value: "nabawi", label: "Masjid an-Nabawi" },
      { value: "quba", label: "Masjid Quba" },
      { value: "qiblatayn", label: "Masjid al-Qiblatayn" },
    ],
  },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={groups}>
        <ComboboxInput placeholder="Choose a masjid" aria-label="Masjid" />
        <ComboboxContent>
          <ComboboxEmpty>No masjid found.</ComboboxEmpty>
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
