"use client";

import * as React from "react";

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "./combobox";

type City = { value: string; label: string };

const cities: City[] = [
  { value: "makkah", label: "مكة المكرمة" },
  { value: "madinah", label: "المدينة المنورة" },
  { value: "jeddah", label: "جدة" },
  { value: "taif", label: "الطائف" },
  { value: "badr", label: "بدر" },
  { value: "riyadh", label: "الرياض" },
];

export function Preview() {
  const anchor = useComboboxAnchor();

  return (
    <div className="w-full max-w-xs">
      <Combobox multiple autoHighlight items={cities} defaultValue={[cities[0], cities[1]]}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(values: City[]) => (
              <React.Fragment>
                {values.map((city) => (
                  <ComboboxChip key={city.value}>{city.label}</ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder="أضف مدينة" aria-label="مدن الرحلة" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>لم يُعثر على مدينة.</ComboboxEmpty>
          <ComboboxList>
            {(item: City) => (
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
