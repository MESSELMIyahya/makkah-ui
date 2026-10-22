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
  { name: "Fajr", adhan: "4:52 AM", iqamah: "5:12 AM" },
  { name: "Dhuhr", adhan: "12:21 PM", iqamah: "12:41 PM" },
  { name: "Asr", adhan: "3:45 PM", iqamah: "4:05 PM" },
  { name: "Maghrib", adhan: "6:12 PM", iqamah: "6:22 PM" },
  { name: "Isha", adhan: "7:42 PM", iqamah: "8:02 PM" },
];

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableCaption>Prayer times at Masjid al-Haram · 1 Ramadan 1448</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Prayer</TableHead>
          <TableHead>Adhan</TableHead>
          <TableHead className="text-end">Iqamah</TableHead>
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
