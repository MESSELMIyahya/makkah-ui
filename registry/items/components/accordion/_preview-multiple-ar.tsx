"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion multiple className="max-w-md">
      <AccordionItem value="fajr">
        <AccordionTrigger>تذكير الفجر</AccordionTrigger>
        <AccordionContent>احصل على تذكير هادئ قبل أذان الفجر بعشرين دقيقة.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="sound">
        <AccordionTrigger>صوت الأذان</AccordionTrigger>
        <AccordionContent>اختر الأذان كاملًا أو نغمة قصيرة أو الاهتزاز فقط.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="method">
        <AccordionTrigger>طريقة الحساب</AccordionTrigger>
        <AccordionContent>
          تُستخدم طريقة أم القرى افتراضيًا لمكة المكرمة والمدينة المنورة.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
