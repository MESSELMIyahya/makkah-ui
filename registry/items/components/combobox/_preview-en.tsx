"use client";

import { Label } from "../label/label";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const masjids = [
  { value: "haram", label: "Masjid al-Haram" },
  { value: "nabawi", label: "Masjid an-Nabawi" },
  { value: "quba", label: "Masjid Quba" },
  { value: "qiblatayn", label: "Masjid al-Qiblatayn" },
  { value: "aisha", label: "Masjid Aisha" },
  { value: "namirah", label: "Masjid Namirah" },
];

export function Preview() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <Label htmlFor="masjid">Masjid</Label>
      <Combobox items={masjids}>
        <ComboboxInput id="masjid" placeholder="Choose a masjid" />
        <ComboboxContent>
          <ComboboxEmpty>No masjid found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof masjids)[number]) => (
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
