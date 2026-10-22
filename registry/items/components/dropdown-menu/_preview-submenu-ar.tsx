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
      <DropdownMenuTrigger render={<Button variant="outline" />}>درس السيرة</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>إضافة إلى التقويم</DropdownMenuItem>
        <DropdownMenuItem>تذكيري قبل الدرس</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <IconShare />
            مشاركة
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <IconBrandWhatsapp />
              واتساب
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconMail />
              البريد الإلكتروني
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconCopy />
              نسخ الرابط
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
