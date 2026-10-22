"use client";

import { useState } from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "./menubar";

export function Preview() {
  const [showHijri, setShowHijri] = useState(true);
  const [showSunrise, setShowSunrise] = useState(false);
  const [city, setCity] = useState("makkah");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={showHijri} onCheckedChange={setShowHijri}>
            Hijri date
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showSunrise} onCheckedChange={setShowSunrise}>
            Sunrise time
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>City</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>Prayer times for</MenubarLabel>
            <MenubarRadioGroup value={city} onValueChange={setCity}>
              <MenubarRadioItem value="makkah">Makkah</MenubarRadioItem>
              <MenubarRadioItem value="madinah">Madinah</MenubarRadioItem>
              <MenubarRadioItem value="riyadh">Riyadh</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
