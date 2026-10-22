"use client";

import { Button } from "../button/button";
import { Input } from "../input/input";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./field";

export function Preview() {
  return (
    <form className="w-full max-w-sm" onSubmit={(event) => event.preventDefault()}>
      <FieldSet>
        <FieldLegend>حجز العمرة</FieldLegend>
        <FieldDescription>سنرسل تأكيد الحجز إلى بريدك الإلكتروني.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="umrah-name">الاسم الكامل</FieldLabel>
            <Input id="umrah-name" placeholder="عبدالله الحربي" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="umrah-pilgrims">عدد المعتمرين</FieldLabel>
              <Input id="umrah-pilgrims" type="number" min={1} defaultValue={2} />
            </Field>
            <Field>
              <FieldLabel htmlFor="umrah-date">تاريخ السفر</FieldLabel>
              <Input id="umrah-date" type="date" />
            </Field>
          </div>
          <Field orientation="horizontal">
            <Button type="submit">تأكيد الحجز</Button>
            <Button type="button" variant="outline">
              إلغاء
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
