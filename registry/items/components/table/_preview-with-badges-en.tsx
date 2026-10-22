"use client";

import { Badge } from "../badge/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";

const bookings = [
  { id: "UM-1042", pkg: "Ramadan Umrah · 10 nights", status: "confirmed" },
  { id: "UM-1043", pkg: "Family Umrah · 7 nights", status: "pending" },
  { id: "UM-1044", pkg: "Express Umrah · 3 nights", status: "cancelled" },
] as const;

const statusLabel = {
  confirmed: "Confirmed",
  pending: "Pending",
  cancelled: "Cancelled",
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
          <TableHead>Booking</TableHead>
          <TableHead>Package</TableHead>
          <TableHead className="text-end">Status</TableHead>
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
