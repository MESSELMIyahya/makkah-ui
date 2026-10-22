"use client";

import { toArabicDigits, toLatinDigits } from "./arabic-format";

const samples = [
  { label: "Booking reference", input: "UMR-2027-0415" },
  { label: "Phone (typed in Arabic)", input: "٠٥٥١٢٣٤٥٦٧" },
  { label: "Code (Persian digits)", input: "۱۴۴۸" },
];

export function Preview() {
  return (
    <table className="w-full max-w-md text-sm">
      <thead>
        <tr className="border-b text-muted-foreground">
          <th scope="col" className="py-2 text-start font-normal">
            Input
          </th>
          <th scope="col" className="py-2 text-start font-normal">
            Arabic digits
          </th>
          <th scope="col" className="py-2 text-start font-normal">
            Latin digits
          </th>
        </tr>
      </thead>
      <tbody>
        {samples.map((sample) => (
          <tr key={sample.label} className="border-b last:border-b-0">
            <th scope="row" className="py-2 text-start font-normal">
              {sample.label}
            </th>
            <td className="py-2 font-mono">{toArabicDigits(toLatinDigits(sample.input))}</td>
            <td className="py-2 font-mono">{toLatinDigits(sample.input)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
