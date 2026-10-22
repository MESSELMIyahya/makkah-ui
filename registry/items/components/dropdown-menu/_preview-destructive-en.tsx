"use client";

import { IconDots, IconPencil, IconTrash } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Preview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" size="icon" aria-label="Booking options" />}
      >
        <IconDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <IconPencil />
          Edit booking
        </DropdownMenuItem>
        <DropdownMenuItem disabled>Duplicate booking</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconTrash />
          Cancel booking
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
