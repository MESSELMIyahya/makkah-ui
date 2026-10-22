"use client";

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./pagination";

const pages = [1, 2, 3, 4, 5];

export function Preview() {
  return (
    <Pagination aria-label="Masjid directory pages">
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`?page=${page}`} isActive={page === 1}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
