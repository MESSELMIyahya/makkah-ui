"use client";

import { Spinner } from "./spinner";

export function Preview() {
  return (
    <div className="flex items-center gap-4">
      <Spinner aria-label="جارٍ التحميل" className="size-3" />
      <Spinner aria-label="جارٍ التحميل" />
      <Spinner aria-label="جارٍ التحميل" className="size-6" />
      <Spinner aria-label="جارٍ التحميل" className="size-8" />
    </div>
  );
}
