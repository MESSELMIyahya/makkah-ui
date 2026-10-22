"use client";

import { IconCalendarX } from "@tabler/icons-react";

import { Button } from "../button/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export function Preview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Postpone lesson</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <IconCalendarX />
          </AlertDialogMedia>
          <AlertDialogTitle>Postpone the weekly fiqh lesson?</AlertDialogTitle>
          <AlertDialogDescription>
            48 students enrolled in the Thursday after-Maghrib halaqa will be notified.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Postpone lesson</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
