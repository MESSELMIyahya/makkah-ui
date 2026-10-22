"use client";

import { ScrollArea } from "./scroll-area";

export function Preview() {
  return (
    <ScrollArea className="h-56 w-full max-w-sm rounded-xl border">
      <div className="grid gap-3 p-4 text-sm leading-relaxed">
        <h4 className="font-medium">خطوات العمرة باختصار</h4>
        <p>الإحرام: يُحرم المعتمر من الميقات بلبس ثياب الإحرام ونيّة العمرة.</p>
        <p>
          الطواف: عند الوصول إلى المسجد الحرام يطوف سبعة أشواط حول الكعبة، يبدأ من الحجر الأسود
          وينتهي إليه.
        </p>
        <p>السعي: يسعى سبعة أشواط بين الصفا والمروة، يبدأ بالصفا ويختم بالمروة.</p>
        <p>الحلق أو التقصير: يحلق الرجل شعره أو يقصّره، وتقصّر المرأة قدر أنملة، وبذلك تتم العمرة.</p>
      </div>
    </ScrollArea>
  );
}
