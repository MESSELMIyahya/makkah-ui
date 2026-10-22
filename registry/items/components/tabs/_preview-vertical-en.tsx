"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="haram" orientation="vertical" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="haram">Masjid al-Haram</TabsTrigger>
        <TabsTrigger value="nabawi">Masjid an-Nabawi</TabsTrigger>
        <TabsTrigger value="quba">Masjid Quba</TabsTrigger>
      </TabsList>
      <TabsContent value="haram" className="text-muted-foreground">
        Makkah. The gates stay open around the clock during Ramadan.
      </TabsContent>
      <TabsContent value="nabawi" className="text-muted-foreground">
        Madinah. Visits to the Rawdah require a booked time slot.
      </TabsContent>
      <TabsContent value="quba" className="text-muted-foreground">
        Madinah. The first masjid built in Islam.
      </TabsContent>
    </Tabs>
  );
}
