"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

const faqs = [
  {
    value: "ihram",
    question: "من أين أُحرم للحج؟",
    answer:
      "يُحرم الحاج من الميقات الواقع على طريقه، والقادم بالطائرة ينوي غالبًا قبل محاذاة الميقات.",
  },
  {
    value: "days",
    question: "كم يومًا يستغرق الحج؟",
    answer:
      "تمتد المناسك الرئيسة من 8 إلى 13 ذي الحجة، لذا يخطط أغلب الحجاج لخمسة أو ستة أيام بين منى وعرفات ومزدلفة.",
  },
  {
    value: "permit",
    question: "هل أحتاج إلى تصريح حج؟",
    answer: "نعم، يجب على المقيمين والحجاج من الخارج الحجز عبر جهة معتمدة والحصول على تصريح رسمي.",
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
