"use client";

import { ScrollArea } from "./scroll-area";

const lectures = [
  { day: "1 رمضان · بعد التراويح", title: "استقبال الشهر الفضيل" },
  { day: "3 رمضان · بعد العصر", title: "فقه الصيام" },
  { day: "5 رمضان · بعد التراويح", title: "السيرة: الهجرة النبوية" },
  { day: "8 رمضان · بعد العصر", title: "أحكام زكاة الفطر" },
  { day: "11 رمضان · بعد التراويح", title: "قصص الصحابة" },
  { day: "15 رمضان · بعد العصر", title: "آداب المسجد" },
  { day: "20 رمضان · بعد التراويح", title: "الاستعداد للاعتكاف" },
  { day: "27 رمضان · بعد التراويح", title: "العيد والتواصل العائلي" },
];

export function Preview() {
  return (
    <ScrollArea className="h-64 w-full max-w-xs rounded-xl border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium">جدول الدروس · رمضان 1448</h4>
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
