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
          toast("تم حجز مقعدك", {
            description: "درس السيرة، الإثنين بعد صلاة العشاء.",
            toasterId: "sonner-demo",
            action: {
              label: "تراجع",
              onClick: () => {},
            },
          })
        }
      >
        حجز مقعد في الدرس
      </Button>
      <Toaster id="sonner-demo" />
    </>
  );
}
