"use client";

import { useState } from "react";

import { Button } from "../button/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const prayers = [
  { id: "fajr", label: "الفجر" },
  { id: "dhuhr", label: "الظهر" },
  { id: "asr", label: "العصر" },
  { id: "maghrib", label: "المغرب" },
  { id: "isha", label: "العشاء" },
];

export function Preview() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    fajr: true,
    maghrib: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>تنبيهات الأذان</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>نبّهني عند أذان</DropdownMenuLabel>
          {prayers.map((prayer) => (
            <DropdownMenuCheckboxItem
              key={prayer.id}
              checked={enabled[prayer.id] ?? false}
              onCheckedChange={(checked) =>
                setEnabled((current) => ({ ...current, [prayer.id]: checked }))
              }
            >
              {prayer.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
