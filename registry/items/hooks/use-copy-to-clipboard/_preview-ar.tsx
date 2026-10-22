"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";

import { Button } from "../../components/button/button";
import { useCopyToClipboard } from "./use-copy-to-clipboard";

const masjidAddress = "المسجد الحرام، أجياد، مكة المكرمة 24231";

export function Preview() {
  const copyState = useCopyToClipboard();
  const copied = copyState.status === "copied";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <p className="text-sm text-muted-foreground">{masjidAddress}</p>
      <Button variant="outline" onClick={() => void copyState.copy(masjidAddress)}>
        {copied ? <IconCheck data-icon="inline-start" /> : <IconCopy data-icon="inline-start" />}
        {copied ? "تم نسخ العنوان" : "نسخ العنوان"}
      </Button>
    </div>
  );
}
