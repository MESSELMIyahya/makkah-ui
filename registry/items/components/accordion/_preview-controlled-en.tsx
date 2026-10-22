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
          Open suhoor
        </Button>
        <Button size="sm" variant="outline" onClick={() => setValue(["iftar"])}>
          Open iftar
        </Button>
      </div>
      <Accordion value={value} onValueChange={setValue}>
        <AccordionItem value="suhoor">
          <AccordionTrigger>Suhoor menu</AccordionTrigger>
          <AccordionContent>
            Dates, laban, oats, and fruit served from 3:30 AM in the masjid courtyard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="iftar">
          <AccordionTrigger>Iftar menu</AccordionTrigger>
          <AccordionContent>
            Dates, water, lentil soup, and rice with chicken right after the Maghrib adhan.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
