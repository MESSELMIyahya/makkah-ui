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
            loading: "جارٍ حساب الزكاة...",
            success: (amount) => "زكاتك المستحقة: " + amount + " ريال",
            error: "تعذر حساب الزكاة.",
            toasterId: "sonner-promise",
          })
        }
      >
        احسب زكاتي
      </Button>
      <Toaster id="sonner-promise" />
    </>
  );
}
