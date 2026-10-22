"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="umrah" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="umrah">العمرة</TabsTrigger>
        <TabsTrigger value="hajj" disabled>
          الحج
        </TabsTrigger>
        <TabsTrigger value="ziyarah">الزيارة</TabsTrigger>
      </TabsList>
      <TabsContent value="umrah" className="text-muted-foreground">
        باقات العمرة متاحة طوال العام.
      </TabsContent>
      <TabsContent value="hajj" className="text-muted-foreground">
        يبدأ التسجيل للحج بعد رمضان.
      </TabsContent>
      <TabsContent value="ziyarah" className="text-muted-foreground">
        جولات مرشدة إلى المعالم التاريخية في المدينة المنورة.
      </TabsContent>
    </Tabs>
  );
}
