"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="halaqat" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="halaqat">Halaqat</TabsTrigger>
        <TabsTrigger value="lectures">Lectures</TabsTrigger>
        <TabsTrigger value="classes">Quran classes</TabsTrigger>
      </TabsList>
      <TabsContent value="halaqat" className="text-muted-foreground">
        Weekly study circles after Maghrib at Masjid Quba.
      </TabsContent>
      <TabsContent value="lectures" className="text-muted-foreground">
        Friday lectures on the seerah, open to everyone.
      </TabsContent>
      <TabsContent value="classes" className="text-muted-foreground">
        Tajweed classes for beginners every Saturday morning.
      </TabsContent>
    </Tabs>
  );
}
