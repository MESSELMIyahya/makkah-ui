"use client";

import { toast } from "sonner";

import { Button } from "../button/button";
import { Toaster } from "./sonner";

const options = { toasterId: "sonner-types" };

export function Preview() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="outline" onClick={() => toast("تم تحديث مواقيت الصلاة لمدينتك.", options)}>
        افتراضي
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("وصل تبرعك لمشروع سقيا الماء.", options)}
      >
        نجاح
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("يبدأ شهر رمضان ١٤٤٨ هـ بعد ١٠ أيام.", options)}
      >
        معلومة
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("بقي ١٥ دقيقة على أذان المغرب.", options)}
      >
        تحذير
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("تعذر حجز الرحلة، حاول مرة أخرى.", options)}
      >
        خطأ
      </Button>
      <Toaster id="sonner-types" />
    </div>
  );
}
