"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

export function Preview() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-60 max-w-md rounded-3xl border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full flex-col justify-center gap-1 p-4">
          <span className="font-medium">المساجد</span>
          <span className="text-sm text-muted-foreground">الحرام، النبوي، قباء</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="50%">
            <div className="flex h-full items-center justify-center p-4 text-sm">مواقيت الصلاة</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50%">
            <div className="flex h-full items-center justify-center p-4 text-sm">
              الحلقات القادمة
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
