"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const faqs = [
  {
    value: "ihram",
    question: "Where do I enter ihram for Hajj?",
    answer:
      "Pilgrims enter ihram at the miqat on their route. Travellers flying in usually make the intention on the plane before passing it.",
  },
  {
    value: "days",
    question: "How many days does Hajj take?",
    answer:
      "The main rites run from 8 to 13 Dhul Hijjah, so most pilgrims plan for five to six days in Mina, Arafat and Muzdalifah.",
  },
  {
    value: "permit",
    question: "Do I need a Hajj permit?",
    answer:
      "Yes. Residents and international pilgrims must book through an approved provider and receive an official permit.",
  },
];

export function Preview() {
  return (
    <Accordion className="max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
