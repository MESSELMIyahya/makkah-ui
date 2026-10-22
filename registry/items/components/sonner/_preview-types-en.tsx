"use client";

import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

const options = { toasterId: "sonner-types" };

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() => toast("Prayer times updated for your city.", options)}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Your donation reached the water well project.", options)}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Ramadan 1448 AH begins in 10 days.", options)}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("15 minutes left until Maghrib adhan.", options)}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Could not book the trip, please try again.", options)}
      >
        Error
      </Button>
      <Toaster id="sonner-types" />
    </div>
  );
}
