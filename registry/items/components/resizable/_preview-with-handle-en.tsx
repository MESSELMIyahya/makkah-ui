"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

export function Preview() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-48 max-w-md rounded-3xl border">
      <ResizablePanel defaultSize="30%" minSize="20%">
        <div className="flex h-full items-center justify-center p-4 font-medium">Halaqat</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%" minSize="40%">
        <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
          Tajweed for beginners, Saturdays after Fajr
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
