"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const prayers = [
  { name: "الفجر", time: "4:52" },
  { name: "الظهر", time: "12:18" },
  { name: "العصر", time: "3:41" },
  { name: "المغرب", time: "6:22" },
  { name: "العشاء", time: "7:52" },
];

export function Preview() {
  return (
    <Tabs defaultValue="today" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="today">اليوم</TabsTrigger>
        <TabsTrigger value="tomorrow">غدًا</TabsTrigger>
        <TabsTrigger value="settings">الأذان</TabsTrigger>
      </TabsList>
      <TabsContent value="today">
        <ul className="flex flex-col gap-2">
          {prayers.map((prayer) => (
            <li key={prayer.name} className="flex items-center justify-between">
              <span className="font-medium">{prayer.name}</span>
              <span className="text-muted-foreground tabular-nums">{prayer.time}</span>
            </li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="tomorrow" className="text-muted-foreground">
        تُنشر مواقيت الغد بعد صلاة العشاء.
      </TabsContent>
      <TabsContent value="settings" className="text-muted-foreground">
        اختر صوت المؤذن والتنبيه قبل كل صلاة.
      </TabsContent>
    </Tabs>
  );
}
