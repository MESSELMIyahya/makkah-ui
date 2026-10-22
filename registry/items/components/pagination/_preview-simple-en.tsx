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
    <Pagination aria-label="Halaqah sessions">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="?session=4"
            aria-label="Previous session"
            text="Previous session"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?session=6" aria-label="Next session" text="Next session" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
