"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const assets = [
  { name: "النقد والمدخرات", amount: "32,000 ر.س" },
  { name: "الذهب (85 غ)", amount: "22,000 ر.س" },
  { name: "عروض التجارة", amount: "6,000 ر.س" },
];

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>الأصل</TableHead>
          <TableHead className="text-end">القيمة</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assets.map((asset) => (
          <TableRow key={asset.name}>
            <TableCell>{asset.name}</TableCell>
            <TableCell className="text-end tabular-nums">{asset.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>الزكاة المستحقة (2.5%)</TableCell>
          <TableCell className="text-end tabular-nums">1,500 ر.س</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
