"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar";

export function Preview() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>الرحلات</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>حجز عمرة جديد</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>حسب الموسم</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>عمرة رمضان</MenubarItem>
              <MenubarItem>موسم الحج</MenubarItem>
              <MenubarItem>إجازة الشتاء</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>تصدير الحجوزات</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>الحساب</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>الملف الشخصي</MenubarItem>
          <MenubarItem>تسجيل الخروج</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
