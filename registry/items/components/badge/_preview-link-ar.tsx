"use client";

import { Badge } from "./badge";

export function Preview() {
  return (
    <Badge
      variant="link"
      // oxlint-disable-next-line jsx-a11y/control-has-associated-label -- Label is provided by the children.
      render={<a href="#hajj-packages" />}
    >
      عرض باقات الحج
    </Badge>
  );
}
