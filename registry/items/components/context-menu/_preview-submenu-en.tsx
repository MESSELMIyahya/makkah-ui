"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";

export function Preview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-sm items-center justify-center rounded-3xl border border-dashed text-sm text-muted-foreground">
        Right-click Masjid al-Qiblatayn
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>View details</ContextMenuItem>
        <ContextMenuItem>Directions</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Move to list</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Favorites</ContextMenuItem>
            <ContextMenuItem>Jumuah masjids</ContextMenuItem>
            <ContextMenuItem>Visited</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
