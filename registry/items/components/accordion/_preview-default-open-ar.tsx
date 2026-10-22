"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion defaultValue={["nisab"]} className="max-w-md">
      <AccordionItem value="nisab">
        <AccordionTrigger>ما هو النصاب؟</AccordionTrigger>
        <AccordionContent>
          النصاب هو الحد الأدنى من المال الذي تجب فيه الزكاة، ويعادل قيمة 85 غرامًا من الذهب.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="hawl">
        <AccordionTrigger>ما هو الحول؟</AccordionTrigger>
        <AccordionContent>الحول سنة قمرية كاملة يبقى فيها المال فوق النصاب.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
