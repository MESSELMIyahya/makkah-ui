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
  { value: "makkah", label: "Makkah" },
  { value: "madinah", label: "Madinah" },
  { value: "jeddah", label: "Jeddah" },
  { value: "taif", label: "Taif" },
  { value: "badr", label: "Badr" },
  { value: "riyadh", label: "Riyadh" },
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
                <ComboboxChipsInput placeholder="Add a city" aria-label="Itinerary cities" />
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>No city found.</ComboboxEmpty>
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
