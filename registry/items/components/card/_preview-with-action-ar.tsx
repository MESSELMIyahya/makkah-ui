"use client";

import { IconPencil } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function Preview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>ملخص الزكاة</CardTitle>
        <CardDescription>يكتمل الحول في 1 رمضان 1448</CardDescription>
        <CardAction>
          <Button variant="outline" size="icon-sm" aria-label="تعديل بيانات الزكاة">
            <IconPencil />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="flex justify-between">
          <span className="text-muted-foreground">المال الخاضع للزكاة</span>
          <span className="font-medium tabular-nums">48,000 ر.س</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">الزكاة المستحقة (2.5%)</span>
          <span className="font-medium tabular-nums">1,200 ر.س</span>
        </div>
      </CardContent>
    </Card>
  );
}
