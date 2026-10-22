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
  { title: "باقات العمرة", href: "/umrah", description: "الطيران والفندق والتأشيرة في حجز واحد." },
  { title: "التسجيل للحج", href: "/hajj", description: "سجّل مبكرًا لموسم الحج القادم." },
  {
    title: "جولات الزيارة",
    href: "/ziyarah",
    description: "زيارات مرشدة في أرجاء المدينة المنورة.",
  },
];

const learning = [
  { title: "الحلقات الأسبوعية", href: "/halaqat", description: "حلقات علمية بعد صلاة المغرب." },
  { title: "دروس القرآن", href: "/classes", description: "دروس التجويد لجميع المستويات." },
];

export function Preview() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>الرحلات</NavigationMenuTrigger>
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
          <NavigationMenuTrigger>التعلّم</NavigationMenuTrigger>
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
            مواقيت الصلاة
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
