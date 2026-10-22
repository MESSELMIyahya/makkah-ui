"use client";

import { IconSearchOff } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

export function Preview() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <IconSearchOff className="size-10 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No search results</EmptyTitle>
        <EmptyDescription>
          No halaqat match &quot;tajweed Friday&quot;. Try another day or a broader topic.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="ghost">Clear search</Button>
      </EmptyContent>
    </Empty>
  );
}
