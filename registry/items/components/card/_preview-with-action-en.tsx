"use client";

import { IconPencil } from "@tabler/icons-react";

import { Button } from "../button/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function Preview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Zakat summary</CardTitle>
        <CardDescription>Hawl ends on 1 Ramadan 1448</CardDescription>
        <CardAction>
          <Button variant="outline" size="icon-sm" aria-label="Edit zakat details">
            <IconPencil />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Zakatable wealth</span>
          <span className="font-medium tabular-nums">SAR 48,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Zakat due (2.5%)</span>
          <span className="font-medium tabular-nums">SAR 1,200</span>
        </div>
      </CardContent>
    </Card>
  );
}
