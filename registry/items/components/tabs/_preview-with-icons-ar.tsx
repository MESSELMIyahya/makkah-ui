"use client";

import { IconBuildingMosque, IconCalendarEvent, IconCoin } from "@tabler/icons-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="masjids" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="masjids">
          <IconBuildingMosque data-icon="inline-start" />
          المساجد
        </TabsTrigger>
        <TabsTrigger value="events">
          <IconCalendarEvent data-icon="inline-start" />
          الفعاليات
        </TabsTrigger>
        <TabsTrigger value="sadaqah">
          <IconCoin data-icon="inline-start" />
          الصدقة
        </TabsTrigger>
      </TabsList>
      <TabsContent value="masjids" className="text-muted-foreground">
        ١٢ مسجدًا بالقرب منك.
      </TabsContent>
      <TabsContent value="events" className="text-muted-foreground">
        إفطار جماعي يوم الخميس.
      </TabsContent>
      <TabsContent value="sadaqah" className="text-muted-foreground">
        ساهم في مشروع حفر بئر ماء.
      </TabsContent>
    </Tabs>
  );
}
