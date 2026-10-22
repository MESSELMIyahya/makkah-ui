"use client";

import { Badge } from "../badge/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const bookings = [
  { id: "UM-1042", pkg: "عمرة رمضان · 10 ليالٍ", status: "confirmed" },
  { id: "UM-1043", pkg: "عمرة عائلية · 7 ليالٍ", status: "pending" },
  { id: "UM-1044", pkg: "عمرة سريعة · 3 ليالٍ", status: "cancelled" },
] as const;

const statusLabel = {
  confirmed: "مؤكد",
  pending: "قيد الانتظار",
  cancelled: "ملغى",
};

const statusVariant = {
  confirmed: "default",
  pending: "secondary",
  cancelled: "destructive",
} as const;

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>الحجز</TableHead>
          <TableHead>الباقة</TableHead>
          <TableHead className="text-end">الحالة</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-mono text-xs">{booking.id}</TableCell>
            <TableCell>{booking.pkg}</TableCell>
            <TableCell className="text-end">
              <Badge variant={statusVariant[booking.status]}>{statusLabel[booking.status]}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
