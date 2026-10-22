"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

const positions = [
  { position: "top-center", label: "أعلى الوسط" },
  { position: "bottom-center", label: "أسفل الوسط" },
  { position: "top-right", label: "أعلى اليمين" },
  { position: "bottom-left", label: "أسفل اليسار" },
] as const;

type Position = (typeof positions)[number]["position"];

export function Preview() {
  const [position, setPosition] = useState<Position>("bottom-center");

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {positions.map((item) => (
        <Button
          key={item.position}
          variant="outline"
          onClick={() => {
            setPosition(item.position);
            toast("حان وقت صلاة العصر.", { toasterId: "sonner-position" });
          }}
        >
          {item.label}
        </Button>
      ))}
      <Toaster id="sonner-position" position={position} />
    </div>
  );
}
