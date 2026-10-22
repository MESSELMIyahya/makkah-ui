"use client";

import { IconBrandWhatsapp, IconCopy, IconMail, IconShare } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function Preview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Seerah lesson</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Add to calendar</DropdownMenuItem>
        <DropdownMenuItem>Remind me before</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <IconShare />
            Share
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <IconBrandWhatsapp />
              WhatsApp
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconMail />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconCopy />
              Copy link
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
