"use client";

import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

export function Preview() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast("Your seat is reserved", {
            description: "Seerah lesson, Monday after Isha prayer.",
            toasterId: "sonner-demo",
            action: {
              label: "Undo",
              onClick: () => {},
            },
          })
        }
      >
        Reserve a lesson seat
      </Button>
      <Toaster id="sonner-demo" />
    </>
  );
}
