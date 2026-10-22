"use client";

import { Button } from "../button/button";
import { Input } from "./input";

export function Preview() {
  return (
    <form
      className="flex w-full max-w-sm items-center gap-2"
      onSubmit={(event) => event.preventDefault()}
    >
      <Input
        type="email"
        placeholder="name@example.com"
        aria-label="البريد الإلكتروني لتحديثات الحلقات الأسبوعية"
      />
      <Button type="submit">اشترك</Button>
    </form>
  );
}
