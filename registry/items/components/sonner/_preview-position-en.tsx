"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

const positions = [
  { position: "top-center", label: "Top center" },
  { position: "bottom-center", label: "Bottom center" },
  { position: "top-right", label: "Top right" },
  { position: "bottom-left", label: "Bottom left" },
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
            toast("It is time for Asr prayer.", { toasterId: "sonner-position" });
          }}
        >
          {item.label}
        </Button>
      ))}
      <Toaster id="sonner-position" position={position} />
    </div>
  );
}
