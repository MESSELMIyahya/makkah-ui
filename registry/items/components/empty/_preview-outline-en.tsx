"use client";

import { IconCalendarOff } from "@tabler/icons-react";

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
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCalendarOff />
        </EmptyMedia>
        <EmptyTitle>No bookings</EmptyTitle>
        <EmptyDescription>
          You have no upcoming Umrah or Hajj bookings. Browse the packages for Shawwal 1448.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Browse packages</Button>
      </EmptyContent>
    </Empty>
  );
}
