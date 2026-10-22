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
        عرض إيصال الصدقة
      </Button>
      <p className="text-sm text-muted-foreground">{open ? "النافذة مفتوحة" : "النافذة مغلقة"}</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تم استلام صدقتك</DialogTitle>
            <DialogDescription>
              تبرعت بمبلغ ٢٠٠ ريال لمشروع إفطار صائم. جزاك الله خيرًا.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>تم</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
