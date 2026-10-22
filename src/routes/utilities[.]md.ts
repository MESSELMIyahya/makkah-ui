import { createFileRoute } from "@tanstack/react-router";

// The section was renamed to "Utilities & Hooks"; keep the old Markdown URL working.
export const Route = createFileRoute("/utilities.md")({
  server: {
    handlers: {
      GET: ({ request }) => Response.redirect(new URL("/utilities-and-hooks.md", request.url), 301),
    },
  },
});
