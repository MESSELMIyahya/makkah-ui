"use client";

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./menubar";

export function Preview() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>الجدول</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              درس جديد
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>حلقة جديدة</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem>
            طباعة جدول رمضان
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>الطلاب</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>تسجيل طالب</MenubarItem>
          <MenubarItem>سجل الحضور</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">أرشفة الفصل</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>مساعدة</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>دليل الاستخدام</MenubarItem>
          <MenubarItem>تواصل مع إدارة المسجد</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
