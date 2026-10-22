"use client";

import { IconClock, IconMapPin } from "@tabler/icons-react";

import { Badge } from "../badge/badge";
import { Button } from "../button/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export function Preview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>مسجد قباء</CardTitle>
        <CardDescription>أول مسجد بُني في الإسلام، جنوب المدينة المنورة.</CardDescription>
        <CardAction>
          <Badge variant="secondary">مفتوح الآن</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <IconMapPin className="size-4" aria-hidden="true" />
          قباء، المدينة المنورة
        </div>
        <div className="flex items-center gap-2">
          <IconClock className="size-4" aria-hidden="true" />
          الصلاة القادمة: العصر 3:28 م
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">الاتجاهات</Button>
        <Button variant="outline" className="flex-1">
          مواقيت الصلاة
        </Button>
      </CardFooter>
    </Card>
  );
}
