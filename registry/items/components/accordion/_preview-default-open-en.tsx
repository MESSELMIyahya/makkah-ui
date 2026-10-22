"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion defaultValue={["nisab"]} className="max-w-md">
      <AccordionItem value="nisab">
        <AccordionTrigger>What is the nisab?</AccordionTrigger>
        <AccordionContent>
          The nisab is the minimum wealth before zakat is due, equal to the value of 85 grams of
          gold.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="hawl">
        <AccordionTrigger>What is the hawl?</AccordionTrigger>
        <AccordionContent>
          The hawl is one full lunar year that your wealth must stay above the nisab.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
