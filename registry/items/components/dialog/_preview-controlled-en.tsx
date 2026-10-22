"use client";

import { useState } from "react";

import { Button } from "../button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";

export function Preview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        View sadaqah receipt
      </Button>
      <p className="text-sm text-muted-foreground">
        {open ? "Dialog is open" : "Dialog is closed"}
      </p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your sadaqah was received</DialogTitle>
            <DialogDescription>
              You donated 200 SAR to the Iftar for fasting people project. JazakAllahu khayran.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
