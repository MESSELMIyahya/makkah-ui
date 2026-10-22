"use client";

import { Label } from "../label/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const cities = [
  { label: "Makkah", value: "makkah" },
  { label: "Madinah", value: "madinah" },
  { label: "Jeddah", value: "jeddah" },
  { label: "Riyadh", value: "riyadh" },
  { label: "Taif", value: "taif" },
];

export function Preview() {
  return (
    <div className="grid w-full max-w-48 gap-2">
      <Label htmlFor="prayer-city">City</Label>
      <Select items={cities}>
        <SelectTrigger id="prayer-city" className="w-full">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
