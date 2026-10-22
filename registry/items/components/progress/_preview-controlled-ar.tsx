"use client";

import * as React from "react";

import { Button } from "../button/button";
import { Progress, ProgressLabel, ProgressValue } from "./progress";

export function Preview() {
  const [days, setDays] = React.useState(12);

  return (
    <div className="grid w-full max-w-sm gap-4">
      <Progress value={days} max={30}>
        <ProgressLabel>الأيام المصومة</ProgressLabel>
        <ProgressValue>{(_formatted, value) => `${value} / 30`}</ProgressValue>
      </Progress>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={days === 0}
          onClick={() => setDays((value) => Math.max(0, value - 1))}
        >
          تراجع
        </Button>
        <Button
          size="sm"
          disabled={days === 30}
          onClick={() => setDays((value) => Math.min(30, value + 1))}
        >
          سجّل يوم صيام
        </Button>
      </div>
    </div>
  );
}
