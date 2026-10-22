"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const links = [
  { label: "Masjids", href: "/masjids" },
  { label: "Lectures", href: "/lectures" },
  { label: "Zakat", href: "/zakat" },
];

export function Preview() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              href={link.href}
              active={link.href === "/masjids"}
              className={navigationMenuTriggerStyle()}
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
