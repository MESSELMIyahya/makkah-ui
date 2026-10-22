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
  { name: "Cash and savings", amount: "SAR 32,000" },
  { name: "Gold (85 g)", amount: "SAR 22,000" },
  { name: "Trade goods", amount: "SAR 6,000" },
];

export function Preview() {
  return (
    <Table className="max-w-md">
      <TableHeader>
        <TableRow>
          <TableHead>Asset</TableHead>
          <TableHead className="text-end">Value</TableHead>
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
          <TableCell>Zakat due (2.5%)</TableCell>
          <TableCell className="text-end tabular-nums">SAR 1,500</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
