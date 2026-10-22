"use client";

import { Button } from "../button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function Preview() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Enable adhan</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Enable adhan alerts</DialogTitle>
          <DialogDescription>
            We will alert you when each prayer time begins, based on your current location.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Later</DialogClose>
          <DialogClose render={<Button />}>Enable</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
