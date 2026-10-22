"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion className="max-w-md">
      <AccordionItem value="ramadan">
        <AccordionTrigger>Ramadan programme</AccordionTrigger>
        <AccordionContent>
          Nightly Taraweeh, daily iftar, and weekend halaqat for youth.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="eid" disabled>
        <AccordionTrigger>Eid prayer details (announced soon)</AccordionTrigger>
        <AccordionContent>
          Location and time will be shared after the moon sighting.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
