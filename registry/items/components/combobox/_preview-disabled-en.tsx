"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./combobox";

const gates = [
  { value: "king-abdulaziz", label: "King Abdulaziz Gate" },
  { value: "king-fahd", label: "King Fahd Gate" },
  { value: "umrah", label: "Umrah Gate" },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={gates} disabled>
        <ComboboxInput disabled placeholder="Choose an entry gate" aria-label="Entry gate" />
        <ComboboxContent>
          <ComboboxEmpty>No gate found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof gates)[number]) => (
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
