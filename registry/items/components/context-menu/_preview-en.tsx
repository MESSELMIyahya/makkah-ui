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
        <span className="font-medium">Fiqh lesson — Thursday after Maghrib</span>
        <span className="text-muted-foreground">Right-click here</span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <IconCalendarPlus />
          Add to calendar
          <ContextMenuShortcut>⌘K</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <IconBell />
          Remind me before
        </ContextMenuItem>
        <ContextMenuItem>
          <IconShare />
          Share lesson
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <IconTrash />
          Unregister
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
