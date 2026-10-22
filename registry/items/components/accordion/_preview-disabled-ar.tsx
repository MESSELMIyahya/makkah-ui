"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion className="max-w-md">
      <AccordionItem value="ramadan">
        <AccordionTrigger>برنامج رمضان</AccordionTrigger>
        <AccordionContent>
          تراويح كل ليلة، وإفطار يومي، وحلقات للشباب في نهاية الأسبوع.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="eid" disabled>
        <AccordionTrigger>تفاصيل صلاة العيد (تُعلن قريبًا)</AccordionTrigger>
        <AccordionContent>يُعلن المكان والموعد بعد تحرّي الهلال.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
