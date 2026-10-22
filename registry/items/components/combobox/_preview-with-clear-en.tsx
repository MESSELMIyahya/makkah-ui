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
  { value: "seerah", label: "Seerah halaqah" },
  { value: "fiqh", label: "Fiqh of fasting" },
  { value: "zakat", label: "Zakat essentials" },
  { value: "hajj", label: "Preparing for Hajj" },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={lectures} defaultValue={lectures[1]}>
        <ComboboxInput showClear placeholder="Choose a lecture" aria-label="Lecture" />
        <ComboboxContent>
          <ComboboxEmpty>No lecture found.</ComboboxEmpty>
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
