"use client";

import { Button } from "../button/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

export function Preview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>إيقاف التذكيرات</AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>إيقاف تذكيرات الصلاة؟</AlertDialogTitle>
          <AlertDialogDescription>
            لن تصلك تنبيهات قبل الأذان حتى تعيد تفعيلها.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>تراجع</AlertDialogCancel>
          <AlertDialogAction>إيقاف</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
