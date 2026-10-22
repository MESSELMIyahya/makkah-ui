"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function Preview() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Next prayer</CardTitle>
        <CardDescription>Maghrib · Masjid an-Nabawi</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tabular-nums">6:12 PM</p>
      </CardContent>
    </Card>
  );
}
