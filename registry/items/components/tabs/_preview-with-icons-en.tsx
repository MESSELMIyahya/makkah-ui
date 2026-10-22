"use client";

import { IconBuildingMosque, IconCalendarEvent, IconCoin } from "@tabler/icons-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="masjids" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="masjids">
          <IconBuildingMosque data-icon="inline-start" />
          Masjids
        </TabsTrigger>
        <TabsTrigger value="events">
          <IconCalendarEvent data-icon="inline-start" />
          Events
        </TabsTrigger>
        <TabsTrigger value="sadaqah">
          <IconCoin data-icon="inline-start" />
          Sadaqah
        </TabsTrigger>
      </TabsList>
      <TabsContent value="masjids" className="text-muted-foreground">
        12 masjids near you.
      </TabsContent>
      <TabsContent value="events" className="text-muted-foreground">
        Community iftar this Thursday.
      </TabsContent>
      <TabsContent value="sadaqah" className="text-muted-foreground">
        Support the water well project.
      </TabsContent>
    </Tabs>
  );
}
