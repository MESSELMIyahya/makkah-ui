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
  { id: "fajr", label: "Fajr" },
  { id: "dhuhr", label: "Dhuhr" },
  { id: "asr", label: "Asr" },
  { id: "maghrib", label: "Maghrib" },
  { id: "isha", label: "Isha" },
];

export function Preview() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    fajr: true,
    maghrib: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Adhan alerts</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Alert me at adhan for</DropdownMenuLabel>
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
