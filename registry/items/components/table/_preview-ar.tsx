"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const prayers = [
  { name: "الفجر", adhan: "4:52 ص", iqamah: "5:12 ص" },
  { name: "الظهر", adhan: "12:21 م", iqamah: "12:41 م" },
  { name: "العصر", adhan: "3:45 م", iqamah: "4:05 م" },
  { name: "المغرب", adhan: "6:12 م", iqamah: "6:22 م" },
  { name: "العشاء", adhan: "7:42 م", iqamah: "8:02 م" },
];

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableCaption>مواقيت الصلاة في المسجد الحرام · 1 رمضان 1448</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>الصلاة</TableHead>
          <TableHead>الأذان</TableHead>
          <TableHead className="text-end">الإقامة</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prayers.map((prayer) => (
          <TableRow key={prayer.name}>
            <TableCell className="font-medium">{prayer.name}</TableCell>
            <TableCell className="tabular-nums">{prayer.adhan}</TableCell>
            <TableCell className="text-end tabular-nums">{prayer.iqamah}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
