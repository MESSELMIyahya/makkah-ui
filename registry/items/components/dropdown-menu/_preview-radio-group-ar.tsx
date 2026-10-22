"use client";

import { useState } from "react";

import { Button } from "../button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Preview() {
  const [method, setMethod] = useState("umm-al-qura");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>طريقة الحساب</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>طريقة حساب المواقيت</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
            <DropdownMenuRadioItem value="umm-al-qura">تقويم أم القرى</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mwl">رابطة العالم الإسلامي</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="egyptian">
              الهيئة المصرية العامة للمساحة
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="isna">
              الجمعية الإسلامية لأمريكا الشمالية
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
