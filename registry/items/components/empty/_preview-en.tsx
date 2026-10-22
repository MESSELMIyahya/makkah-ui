"use client";

import { IconBellRinging, IconPlus } from "@tabler/icons-react";

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
        <EmptyMedia variant="icon">
          <IconBellRinging />
        </EmptyMedia>
        <EmptyTitle>No prayer reminders yet</EmptyTitle>
        <EmptyDescription>
          Add a reminder before Fajr, Dhuhr, Asr, Maghrib or Isha and we will notify you on time.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>
            <IconPlus data-icon="inline-start" />
            Add reminder
          </Button>
          <Button variant="outline">Adhan settings</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
}
