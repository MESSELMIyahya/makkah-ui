"use client";

import { Badge } from "../badge/badge";
import { Spinner } from "./spinner";

export function Preview() {
  return (
    <Badge variant="secondary">
      <Spinner data-icon="inline-start" aria-label="Syncing" />
      Syncing adhan settings
    </Badge>
  );
}
