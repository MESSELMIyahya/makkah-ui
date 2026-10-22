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
      <AlertDialogTrigger render={<Button variant="outline" />}>تأجيل الدرس</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <IconCalendarX />
          </AlertDialogMedia>
          <AlertDialogTitle>تأجيل درس الفقه الأسبوعي؟</AlertDialogTitle>
          <AlertDialogDescription>
            سيصل إشعار إلى ٤٨ طالبًا مسجلين في حلقة يوم الخميس بعد المغرب.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>إلغاء</AlertDialogCancel>
          <AlertDialogAction>تأجيل الدرس</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
