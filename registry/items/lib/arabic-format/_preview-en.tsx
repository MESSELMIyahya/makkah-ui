"use client";

import { formatArabicNumber, formatHijriDate, formatPrayerTime, formatSar } from "./arabic-format";

const locale = "en";
const digits = "latn";
const sampleDate = new Date(2027, 1, 8);
const maghribTime = new Date(2027, 1, 8, 18, 12);

const rows = [
  { label: "Zakat due", value: formatSar(2187.5, { locale }) },
  { label: "Hijri date", value: formatHijriDate(sampleDate, { locale }) },
  { label: "Maghrib", value: formatPrayerTime(maghribTime, { locale }) },
  { label: "Donors", value: formatArabicNumber(12_480, { digits }) },
];

export function Preview() {
  return (
    <table className="w-full max-w-sm text-sm">
      <caption className="pb-2 text-start font-medium">Formatted values</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b last:border-b-0">
            <th scope="row" className="py-2 text-start font-normal text-muted-foreground">
              {row.label}
            </th>
            <td className="py-2 text-end font-medium tabular-nums">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
