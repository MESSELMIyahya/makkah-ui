"use client";

import * as React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const totalPages = 4;

export function Preview() {
  const [page, setPage] = React.useState(1);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, next: number) => {
    event.preventDefault();
    setPage(Math.min(Math.max(next, 1), totalPages));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-muted-foreground">
        Showing donation campaigns, page {page} of {totalPages}
      </p>
      <Pagination aria-label="Donation campaigns">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`?page=${page - 1}`}
              aria-label="Previous page"
              text="Previous"
              aria-disabled={page === 1}
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              onClick={(event) => goTo(event, page - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
            <PaginationItem key={item}>
              <PaginationLink
                href={`?page=${item}`}
                isActive={item === page}
                onClick={(event) => goTo(event, item)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href={`?page=${page + 1}`}
              aria-label="Next page"
              text="Next"
              aria-disabled={page === totalPages}
              className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
              onClick={(event) => goTo(event, page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
