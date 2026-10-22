"use client";

import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

function calculateZakat() {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(1250), 1500);
  });
}

export function Preview() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(calculateZakat(), {
            loading: "Calculating zakat...",
            success: (amount) => "Zakat due: " + amount + " SAR",
            error: "Could not calculate zakat.",
            toasterId: "sonner-promise",
          })
        }
      >
        Calculate my zakat
      </Button>
      <Toaster id="sonner-promise" />
    </>
  );
}
