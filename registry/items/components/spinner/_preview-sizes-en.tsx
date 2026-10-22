"use client";

import { Spinner } from "./spinner";

export function Preview() {
  return (
    <div className="flex items-center gap-4">
      <Spinner aria-label="Loading" className="size-3" />
      <Spinner aria-label="Loading" />
      <Spinner aria-label="Loading" className="size-6" />
      <Spinner aria-label="Loading" className="size-8" />
    </div>
  );
}
