"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

export function Preview() {
  return (
    <Pagination aria-label="صفحات المحاضرات">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?page=1" aria-label="الصفحة السابقة" text="السابق" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?page=3" aria-label="الصفحة التالية" text="التالي" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
