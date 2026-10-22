"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  return (
    <Accordion multiple className="max-w-md">
      <AccordionItem value="fajr">
        <AccordionTrigger>Fajr reminder</AccordionTrigger>
        <AccordionContent>Get a gentle reminder 20 minutes before the Fajr adhan.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="sound">
        <AccordionTrigger>Adhan sound</AccordionTrigger>
        <AccordionContent>Choose the full adhan, a short tone, or vibration only.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="method">
        <AccordionTrigger>Calculation method</AccordionTrigger>
        <AccordionContent>Umm al-Qura is used by default for Makkah and Madinah.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
