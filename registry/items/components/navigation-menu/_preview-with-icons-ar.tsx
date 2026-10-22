"use client";

import {
  IconBuildingMosque,
  IconCalculator,
  IconClock,
  IconHeartHandshake,
} from "@tabler/icons-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const tools = [
  { title: "مواقيت الصلاة", href: "/prayer-times", icon: IconClock },
  { title: "دليل المساجد", href: "/masjids", icon: IconBuildingMosque },
  { title: "حاسبة الزكاة", href: "/zakat", icon: IconCalculator },
  { title: "الصدقة", href: "/sadaqah", icon: IconHeartHandshake },
];

export function Preview() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الأدوات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[18rem] grid-cols-2 gap-1">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <NavigationMenuLink href={tool.href}>
                    <tool.icon />
                    {tool.title}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
