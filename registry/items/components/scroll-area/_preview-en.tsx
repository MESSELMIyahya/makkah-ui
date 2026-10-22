"use client";

import { ScrollArea } from "./scroll-area";

const lectures = [
  { day: "1 Ramadan · after Taraweeh", title: "Welcoming the blessed month" },
  { day: "3 Ramadan · after Asr", title: "Fiqh of fasting" },
  { day: "5 Ramadan · after Taraweeh", title: "Seerah: the Hijrah" },
  { day: "8 Ramadan · after Asr", title: "Zakat al-Fitr explained" },
  { day: "11 Ramadan · after Taraweeh", title: "Stories of the Sahabah" },
  { day: "15 Ramadan · after Asr", title: "Etiquette of the masjid" },
  { day: "20 Ramadan · after Taraweeh", title: "Preparing for I’tikaf" },
  { day: "27 Ramadan · after Taraweeh", title: "Eid traditions and family" },
];

export function Preview() {
  return (
    <ScrollArea className="h-64 w-full max-w-xs rounded-xl border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium">Lecture schedule · Ramadan 1448</h4>
        <ul className="grid gap-3">
          {lectures.map((lecture) => (
            <li key={lecture.title} className="grid gap-0.5 border-b pb-3 text-sm last:border-0">
              <span className="font-medium">{lecture.title}</span>
              <span className="text-muted-foreground">{lecture.day}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
}
