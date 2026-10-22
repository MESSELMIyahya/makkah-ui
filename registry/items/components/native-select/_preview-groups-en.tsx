"use client";

import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "./native-select";

export function Preview() {
  return (
    <NativeSelect aria-label="Hijri month" defaultValue="ramadan">
      <NativeSelectOptGroup label="Sacred months">
        <NativeSelectOption value="muharram">Muharram</NativeSelectOption>
        <NativeSelectOption value="rajab">Rajab</NativeSelectOption>
        <NativeSelectOption value="dhul-qadah">Dhul Qadah</NativeSelectOption>
        <NativeSelectOption value="dhul-hijjah">Dhul Hijjah</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Other months">
        <NativeSelectOption value="safar">Safar</NativeSelectOption>
        <NativeSelectOption value="shaban">Shaban</NativeSelectOption>
        <NativeSelectOption value="ramadan">Ramadan</NativeSelectOption>
        <NativeSelectOption value="shawwal">Shawwal</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  );
}
