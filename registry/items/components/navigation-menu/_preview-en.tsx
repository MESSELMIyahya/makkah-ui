"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const journeys = [
  {
    title: "Umrah packages",
    href: "/umrah",
    description: "Flights, hotels and visas in one booking.",
  },
  {
    title: "Hajj registration",
    href: "/hajj",
    description: "Register early for the coming Hajj season.",
  },
  { title: "Ziyarah tours", href: "/ziyarah", description: "Guided visits around Madinah." },
];

const learning = [
  { title: "Weekly halaqat", href: "/halaqat", description: "Study circles after Maghrib." },
  { title: "Quran classes", href: "/classes", description: "Tajweed classes for every level." },
];

export function Preview() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Journeys</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[22rem] gap-1">
              {journeys.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href} className="flex-col items-start gap-0.5">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground">{item.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[20rem] gap-1">
              {learning.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href} className="flex-col items-start gap-0.5">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground">{item.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/prayer-times" className={navigationMenuTriggerStyle()}>
            Prayer times
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
