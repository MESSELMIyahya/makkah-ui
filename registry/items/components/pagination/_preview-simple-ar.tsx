"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

export function Preview() {
  return (
    <Pagination aria-label="جلسات الحلقة">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?session=4" aria-label="الجلسة السابقة" text="الجلسة السابقة" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?session=6" aria-label="الجلسة التالية" text="الجلسة التالية" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
