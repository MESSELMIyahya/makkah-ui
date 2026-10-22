"use client";

import { Button } from "../button/button";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <form className="grid w-full max-w-sm gap-2" onSubmit={(event) => event.preventDefault()}>
      <Textarea aria-label="اقتراح موضوع" placeholder="اقترح موضوعًا لحلقة الجمعة" />
      <Button type="submit">أرسل إلى لجنة المسجد</Button>
    </form>
  );
}
