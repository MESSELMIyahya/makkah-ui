"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="umrah" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="umrah">Umrah</TabsTrigger>
        <TabsTrigger value="hajj" disabled>
          Hajj
        </TabsTrigger>
        <TabsTrigger value="ziyarah">Ziyarah</TabsTrigger>
      </TabsList>
      <TabsContent value="umrah" className="text-muted-foreground">
        Umrah packages are available all year.
      </TabsContent>
      <TabsContent value="hajj" className="text-muted-foreground">
        Hajj registration opens after Ramadan.
      </TabsContent>
      <TabsContent value="ziyarah" className="text-muted-foreground">
        Guided visits to the historic sites of Madinah.
      </TabsContent>
    </Tabs>
  );
}
