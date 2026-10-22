"use client";

import { IconChevronDown, IconGift, IconUsersGroup, IconWalk } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu/dropdown-menu";
import { ButtonGroup } from "./button-group";

export function Preview() {
  return (
    <ButtonGroup aria-label="Booking">
      <Button>Book Umrah</Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="More booking options" />}>
          <IconChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconWalk />
              Book Hajj
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconUsersGroup />
              Group booking
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconGift />
              Gift a booking
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
