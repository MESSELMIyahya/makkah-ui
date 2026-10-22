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
  { label: "مكة المكرمة", value: "makkah" },
  { label: "المدينة المنورة", value: "madinah" },
  { label: "جدة", value: "jeddah" },
  { label: "الرياض", value: "riyadh" },
  { label: "الطائف", value: "taif" },
];

export function Preview() {
  return (
    <div className="grid w-full max-w-48 gap-2">
      <Label htmlFor="prayer-city">المدينة</Label>
      <Select items={cities}>
        <SelectTrigger id="prayer-city" className="w-full">
          <SelectValue placeholder="اختر مدينة" />
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
