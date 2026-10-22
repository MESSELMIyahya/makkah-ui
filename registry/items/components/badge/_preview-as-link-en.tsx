"use client";

import { Badge } from "./badge";

export function Preview() {
  return (
    <Badge
      variant="outline"
      // oxlint-disable-next-line jsx-a11y/control-has-associated-label -- Label is provided by the children.
      render={<a href="#eid-events" />}
    >
      Eid al-Fitr events
    </Badge>
  );
}
