"use client";

import { Button } from "../button/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

export function Preview() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Iftar sadaqah</CardTitle>
        <CardDescription>Ramadan 1448 campaign</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Provide 30 iftar meals for fasting families at the community masjid.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t">
        <Button variant="ghost">Cancel</Button>
        <Button>Donate SAR 450</Button>
      </CardFooter>
    </Card>
  );
}
