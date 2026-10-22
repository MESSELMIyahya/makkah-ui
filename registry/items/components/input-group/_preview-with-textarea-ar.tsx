"use client";

import { IconSend } from "@tabler/icons-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

export function Preview() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupTextarea placeholder="اكتب سؤالك للحلقة…" aria-label="سؤال للحلقة" />
      <InputGroupAddon align="block-end">
        <InputGroupText>0/280</InputGroupText>
        <InputGroupButton variant="default" className="ms-auto">
          إرسال
          <IconSend className="rtl:-scale-x-100" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
