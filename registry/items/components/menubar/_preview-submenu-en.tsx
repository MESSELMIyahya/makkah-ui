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
        <MenubarTrigger>Trips</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Umrah booking</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>By season</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Ramadan Umrah</MenubarItem>
              <MenubarItem>Hajj season</MenubarItem>
              <MenubarItem>Winter break</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>Export bookings</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Account</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Profile</MenubarItem>
          <MenubarItem>Log out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
