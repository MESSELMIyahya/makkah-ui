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
        انقر بزر الفأرة الأيمن على مسجد القبلتين
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>عرض التفاصيل</ContextMenuItem>
        <ContextMenuItem>الاتجاهات</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>نقل إلى قائمة</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>المفضلة</ContextMenuItem>
            <ContextMenuItem>مساجد الجمعة</ContextMenuItem>
            <ContextMenuItem>تمت زيارتها</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}
