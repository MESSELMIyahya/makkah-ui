"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const lectures = [
  { id: "1", title: "Seerah of the Prophet", time: "After Fajr" },
  { id: "2", title: "Fiqh of fasting", time: "After Asr" },
  { id: "3", title: "Tajweed class", time: "After Isha" },
];

const selectedId = "2";

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Lecture</TableHead>
          <TableHead className="text-end">Time</TableHead>
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
