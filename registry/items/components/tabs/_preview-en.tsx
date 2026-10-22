"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const prayers = [
  { name: "Fajr", time: "4:52" },
  { name: "Dhuhr", time: "12:18" },
  { name: "Asr", time: "3:41" },
  { name: "Maghrib", time: "6:22" },
  { name: "Isha", time: "7:52" },
];

export function Preview() {
  return (
    <Tabs defaultValue="today" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
        <TabsTrigger value="settings">Adhan</TabsTrigger>
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
        Tomorrow&apos;s times are published after Isha.
      </TabsContent>
      <TabsContent value="settings" className="text-muted-foreground">
        Choose the muezzin voice and a reminder before each prayer.
      </TabsContent>
    </Tabs>
  );
}
