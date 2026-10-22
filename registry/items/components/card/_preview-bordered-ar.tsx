"use client";

import { Button } from "../button/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export function Preview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>صدقة الإفطار</CardTitle>
        <CardDescription>حملة رمضان 1448</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">قدّم 30 وجبة إفطار للأسر الصائمة في مسجد الحي.</p>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t">
        <Button variant="ghost">إلغاء</Button>
        <Button>تبرّع بـ 450 ر.س</Button>
      </CardFooter>
    </Card>
  );
}
