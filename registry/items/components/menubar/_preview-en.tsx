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
        <MenubarTrigger>Schedule</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New lesson
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New halaqa</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem>
            Print Ramadan schedule
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Students</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Enroll student</MenubarItem>
          <MenubarItem>Attendance log</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Archive class</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>User guide</MenubarItem>
          <MenubarItem>Contact masjid office</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
