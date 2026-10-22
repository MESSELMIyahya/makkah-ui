"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="haram" orientation="vertical" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="haram">المسجد الحرام</TabsTrigger>
        <TabsTrigger value="nabawi">المسجد النبوي</TabsTrigger>
        <TabsTrigger value="quba">مسجد قباء</TabsTrigger>
      </TabsList>
      <TabsContent value="haram" className="text-muted-foreground">
        مكة المكرمة. الأبواب مفتوحة على مدار الساعة في رمضان.
      </TabsContent>
      <TabsContent value="nabawi" className="text-muted-foreground">
        المدينة المنورة. زيارة الروضة تتطلب حجز موعد مسبق.
      </TabsContent>
      <TabsContent value="quba" className="text-muted-foreground">
        المدينة المنورة. أول مسجد بُني في الإسلام.
      </TabsContent>
    </Tabs>
  );
}
