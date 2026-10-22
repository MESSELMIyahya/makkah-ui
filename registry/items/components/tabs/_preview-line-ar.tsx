"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function Preview() {
  return (
    <Tabs defaultValue="halaqat" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="halaqat">الحلقات</TabsTrigger>
        <TabsTrigger value="lectures">المحاضرات</TabsTrigger>
        <TabsTrigger value="classes">دروس القرآن</TabsTrigger>
      </TabsList>
      <TabsContent value="halaqat" className="text-muted-foreground">
        حلقات علمية أسبوعية بعد المغرب في مسجد قباء.
      </TabsContent>
      <TabsContent value="lectures" className="text-muted-foreground">
        محاضرات الجمعة في السيرة النبوية، مفتوحة للجميع.
      </TabsContent>
      <TabsContent value="classes" className="text-muted-foreground">
        دروس التجويد للمبتدئين صباح كل سبت.
      </TabsContent>
    </Tabs>
  );
}
