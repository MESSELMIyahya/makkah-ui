"use client";

import { ScrollArea } from "./scroll-area";

export function Preview() {
  return (
    <ScrollArea className="h-56 w-full max-w-sm rounded-xl border">
      <div className="grid gap-3 p-4 text-sm leading-relaxed">
        <h4 className="font-medium">Umrah steps at a glance</h4>
        <p>
          Ihram: Enter the state of ihram at the miqat, wearing the ihram garments and making your
          intention for Umrah.
        </p>
        <p>
          Tawaf: On reaching Masjid al-Haram, perform seven circuits around the Kaaba, starting and
          ending at the Black Stone.
        </p>
        <p>
          Sa’i: Walk seven times between the hills of Safa and Marwah, beginning at Safa and
          finishing at Marwah.
        </p>
        <p>
          Halq or taqsir: Men shave or shorten their hair and women trim a fingertip’s length,
          completing the Umrah.
        </p>
      </div>
    </ScrollArea>
  );
}
