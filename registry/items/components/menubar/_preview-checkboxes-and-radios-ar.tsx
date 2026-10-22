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
        <MenubarTrigger>العرض</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={showHijri} onCheckedChange={setShowHijri}>
            التاريخ الهجري
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showSunrise} onCheckedChange={setShowSunrise}>
            وقت الشروق
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>المدينة</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>مواقيت الصلاة في</MenubarLabel>
            <MenubarRadioGroup value={city} onValueChange={setCity}>
              <MenubarRadioItem value="makkah">مكة المكرمة</MenubarRadioItem>
              <MenubarRadioItem value="madinah">المدينة المنورة</MenubarRadioItem>
              <MenubarRadioItem value="riyadh">الرياض</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
