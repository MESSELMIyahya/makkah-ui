"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

export function Preview() {
  return (
    <ResizablePanelGroup orientation="vertical" className="min-h-60 max-w-md rounded-3xl border">
      <ResizablePanel defaultSize="30%">
        <div className="flex h-full items-center justify-center p-4 font-medium">
          Ramadan schedule
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
          Taraweeh after Isha, nightly at Masjid Quba
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
