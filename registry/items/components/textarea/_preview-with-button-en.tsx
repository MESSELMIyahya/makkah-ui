"use client";

import { Button } from "../button/button";
import { Textarea } from "./textarea";

export function Preview() {
  return (
    <form className="grid w-full max-w-sm gap-2" onSubmit={(event) => event.preventDefault()}>
      <Textarea aria-label="Topic suggestion" placeholder="Suggest a topic for the Friday halaqa" />
      <Button type="submit">Send to the masjid committee</Button>
    </form>
  );
}
