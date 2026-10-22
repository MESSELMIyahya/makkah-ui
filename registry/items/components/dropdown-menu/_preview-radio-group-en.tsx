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
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Calculation method
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Prayer time calculation</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={method} onValueChange={setMethod}>
            <DropdownMenuRadioItem value="umm-al-qura">Umm al-Qura</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mwl">Muslim World League</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="egyptian">
              Egyptian General Authority
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="isna">ISNA (North America)</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
