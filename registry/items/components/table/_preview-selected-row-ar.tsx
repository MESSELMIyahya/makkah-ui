"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const lectures = [
  { id: "1", title: "السيرة النبوية", time: "بعد الفجر" },
  { id: "2", title: "فقه الصيام", time: "بعد العصر" },
  { id: "3", title: "درس التجويد", time: "بعد العشاء" },
];

const selectedId = "2";

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>الدرس</TableHead>
          <TableHead className="text-end">الموعد</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lectures.map((lecture) => (
          <TableRow
            key={lecture.id}
            data-state={lecture.id === selectedId ? "selected" : undefined}
            aria-selected={lecture.id === selectedId}
          >
            <TableCell className="font-medium">{lecture.title}</TableCell>
            <TableCell className="text-end tabular-nums">{lecture.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
