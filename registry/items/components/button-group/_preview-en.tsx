"use client";

import { IconCalendarEvent, IconChevronDown, IconShare } from "@tabler/icons-react";

import { Button } from "../button/button";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ButtonGroup aria-label="Lecture actions">
        <Button variant="outline">
          <IconCalendarEvent data-icon="inline-start" />
          Add to calendar
        </Button>
        <Button variant="outline">
          <IconShare data-icon="inline-start" />
          Share
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Book Umrah">
        <Button>Book Umrah</Button>
        <Button size="icon" aria-label="More booking options">
          <IconChevronDown />
        </Button>
      </ButtonGroup>
    </div>
  );
}
