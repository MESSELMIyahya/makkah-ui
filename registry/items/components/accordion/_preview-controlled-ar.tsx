"use client";

import * as React from "react";

import { Button } from "../button/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export function Preview() {
  const [value, setValue] = React.useState<string[]>(["suhoor"]);

  return (
    <div className="grid w-full max-w-md gap-3">
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setValue(["suhoor"])}>
          افتح السحور
        </Button>
        <Button size="sm" variant="outline" onClick={() => setValue(["iftar"])}>
          افتح الإفطار
        </Button>
      </div>
      <Accordion value={value} onValueChange={setValue}>
        <AccordionItem value="suhoor">
          <AccordionTrigger>قائمة السحور</AccordionTrigger>
          <AccordionContent>
            تمر ولبن وشوفان وفاكهة تُقدَّم من الساعة 3:30 فجرًا في ساحة المسجد.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="iftar">
          <AccordionTrigger>قائمة الإفطار</AccordionTrigger>
          <AccordionContent>
            تمر وماء وشوربة عدس وأرز بالدجاج بعد أذان المغرب مباشرة.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
