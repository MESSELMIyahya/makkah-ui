"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

export function Preview() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-60 max-w-md rounded-3xl border">
      <ResizablePanel defaultSize="40%">
        <div className="flex h-full flex-col justify-center gap-1 p-4">
          <span className="font-medium">Masjids</span>
          <span className="text-sm text-muted-foreground">Al-Haram, An-Nabawi, Quba</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="60%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="50%">
            <div className="flex h-full items-center justify-center p-4 text-sm">Prayer times</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="50%">
            <div className="flex h-full items-center justify-center p-4 text-sm">
              Upcoming halaqat
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
