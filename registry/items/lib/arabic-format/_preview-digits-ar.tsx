"use client";

import { toArabicDigits, toLatinDigits } from "./arabic-format";

const samples = [
  { label: "رقم حجز العمرة", input: "UMR-2027-0415" },
  { label: "رقم جوال مكتوب بالعربية", input: "٠٥٥١٢٣٤٥٦٧" },
  { label: "رمز بأرقام فارسية", input: "۱۴۴۸" },
];

export function Preview() {
  return (
    <table className="w-full max-w-md text-sm">
      <thead>
        <tr className="border-b text-muted-foreground">
          <th scope="col" className="py-2 text-start font-normal">
            المُدخل
          </th>
          <th scope="col" className="py-2 text-start font-normal">
            أرقام عربية
          </th>
          <th scope="col" className="py-2 text-start font-normal">
            أرقام لاتينية
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
