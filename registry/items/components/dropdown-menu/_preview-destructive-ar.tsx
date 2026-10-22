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
        render={<Button variant="outline" size="icon" aria-label="خيارات الحجز" />}
      >
        <IconDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <IconPencil />
          تعديل الحجز
        </DropdownMenuItem>
        <DropdownMenuItem disabled>تكرار الحجز</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <IconTrash />
          إلغاء الحجز
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
