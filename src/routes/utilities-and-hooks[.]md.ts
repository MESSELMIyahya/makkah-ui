import { createFileRoute } from "@tanstack/react-router";

import { getRegistrySectionMarkdownResponse } from "../lib/registry/markdown.server";

export const Route = createFileRoute("/utilities-and-hooks.md")({
  server: {
    handlers: {
      GET: () => getRegistrySectionMarkdownResponse("utilities-and-hooks"),
    },
  },
});
