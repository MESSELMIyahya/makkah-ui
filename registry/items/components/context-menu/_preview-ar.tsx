"use client";

import { IconBell, IconCalendarPlus, IconShare, IconTrash } from "@tabler/icons-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "./context-menu";

export function Preview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-sm flex-col items-center justify-center gap-1 rounded-3xl border border-dashed text-sm">
        <span className="font-medium">درس الفقه — الخميس بعد المغرب</span>
        <span className="text-muted-foreground">انقر بزر الفأرة الأيمن هنا</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <IconCalendarPlus />
          إضافة إلى التقويم
          <ContextMenuShortcut>⌘K</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconBell />
          تذكيري قبل الدرس
        </ContextMenuItem>
        <ContextMenuItem>
          <IconShare />
          مشاركة الدرس
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <IconTrash />
          إلغاء التسجيل
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
