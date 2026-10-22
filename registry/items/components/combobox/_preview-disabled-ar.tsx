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
  { value: "king-abdulaziz", label: "باب الملك عبدالعزيز" },
  { value: "king-fahd", label: "باب الملك فهد" },
  { value: "umrah", label: "باب العمرة" },
];

export function Preview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox items={gates} disabled>
        <ComboboxInput disabled placeholder="اختر باب الدخول" aria-label="باب الدخول" />
        <ComboboxContent>
          <ComboboxEmpty>لم يُعثر على باب.</ComboboxEmpty>
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
