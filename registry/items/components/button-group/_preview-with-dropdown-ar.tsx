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
    <ButtonGroup aria-label="الحجز">
      <Button>احجز العمرة</Button>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button size="icon" aria-label="خيارات حجز أخرى" />}>
          <IconChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <IconWalk />
              احجز الحج
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconUsersGroup />
              حجز جماعي
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconGift />
              أهدِ حجزًا
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}
