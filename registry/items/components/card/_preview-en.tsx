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
        <CardTitle>Masjid Quba</CardTitle>
        <CardDescription>The first masjid built in Islam, south of Madinah.</CardDescription>
        <CardAction>
          <Badge variant="secondary">Open now</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <IconMapPin className="size-4" aria-hidden="true" />
          Quba, Madinah
        </div>
        <div className="flex items-center gap-2">
          <IconClock className="size-4" aria-hidden="true" />
          Next prayer: Asr at 3:28 PM
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Get directions</Button>
        <Button variant="outline" className="flex-1">
          Prayer times
        </Button>
      </CardFooter>
    </Card>
  );
}
