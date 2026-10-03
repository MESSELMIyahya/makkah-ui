import contentCollections from "@content-collections/vite";
import createMdx from "@mdx-js/rollup";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { cloudflare } from "@cloudflare/vite-plugin";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite-plus";

import { getPrerenderPages } from "./src/lib/prerender-pages.ts";
import { shouldExcludeFromSitemap } from "./src/lib/seo.ts";
import { siteConfig } from "./src/lib/site-config.ts";

const isBuild =
  process.env.NODE_ENV === "production" || process.env.COMMAND === "build";
const isTest = process.env.VITEST === "true";

const config = defineConfig({
  run: {
    tasks: {
      "registry:new": {
        command: "bun --bun ./scripts/new.ts",
      },
      "registry:doctor": {
        command: "bun --bun ./scripts/doctor.ts",
      },
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortImports: {},
    sortTailwindcss: {
      stylesheet: "src/styles.css",
      functions: ["clsx", "cn", "cva", "tw"],
      preserveDuplicates: false,
      preserveWhitespace: false,
    },
    sortPackageJson: true,
    overrides: [
      {
        files: ["**/*.json", "**/*.jsonc"],
        options: {
          trailingComma: "none",
        },
      },
    ],
    ignorePatterns: [
      "**/.nitro/**",
      "**/.output/**",
      "**/.tanstack/**",
      "**/dist/**",
      "**/node_modules/**",
      "registry/items/**/_registry.mdx",
      "src/routeTree.gen.ts",
      "AGENTS.md",
      "README.md",
    ],
  },
  lint: {
    plugins: [
      "oxc",
      "eslint",
      "typescript",
      "react",
      "import",
      "unicorn",
      "vitest",
      "jsx-a11y",
    ],
    options: { typeAware: true, typeCheck: true },
    env: {
      builtin: true,
    },
    categories: {
      correctness: "error",
      suspicious: "warn",
      perf: "warn",
    },
    rules: {
      "no-dupe-else-if": "error",
      "no-empty": "error",
      "no-restricted-globals": "error",
      "react/exhaustive-deps": "error",
      "react/rules-of-hooks": "error",
      "typescript/array-type": "error",
      "typescript/consistent-type-exports": "error",
      "typescript/no-floating-promises": "error",
      "typescript/no-misused-promises": "error",
      "typescript/no-namespace": "error",
      "typescript/prefer-for-of": "error",
      "typescript/require-await": "error",
      "unicorn/no-new-buffer": "error",
      "jsx-a11y/anchor-has-content": "off",
      "react/react-in-jsx-scope": "off",
    },
    overrides: [
      {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        rules: {
          "typescript/no-unused-vars": "off",
        },
      },
      {
        files: ["content-collections.ts"],
        rules: {
          "no-underscore-dangle": ["warn", { allow: ["_meta"] }],
        },
      },
    ],
    ignorePatterns: [
      "**/.nitro/**",
      "**/.output/**",
      "**/.tanstack/**",
      "**/dist/**",
      "**/node_modules/**",
      "src/routeTree.gen.ts",
    ],
  },
  test: {
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    globals: true,
  },
  clearScreen: false,
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-dom",
              test: /node_modules[\\/]react-dom[\\/]/u,
            },
          ],
        },
      },
    },
  },
  server: {
    watch: {
      ignored: [
        "**/.nitro/**",
        "**/.output/**",
        "**/.tanstack/**",
        "**/dist/**",
        "**/node_modules/**",
      ],
    },
  },
  resolve: {
    tsconfigPaths: true,
    alias: [
      { find: /^zod$/, replacement: "zod/v3" },
      { find: /^tslib$/, replacement: "tslib/tslib.es6.js" },
    ],
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    devtools(),
    contentCollections(),
    createMdx({
      include: [
        "**/registry/docs/*.{md,mdx}",
        "**/registry/items/**/_registry.mdx",
      ],
      remarkPlugins: [remarkFrontmatter, remarkGfm],
    }),
    tailwindcss(),
    ...(isTest
      ? []
      : [
          tanstackStart({
            rsc: {
              enabled: true,
            },
            // Disable heavy worker-based prerendering during fast builds
            // Set PRERENDER=true when you explicitly want static exports
            pages: process.env.PRERENDER === "true" ? getPrerenderPages() : [],
            prerender: {
              enabled: process.env.PRERENDER === "true",
              autoStaticPathsDiscovery: false,
              crawlLinks: false,
              onSuccess: ({ page }) => {
                if (!shouldExcludeFromSitemap(page.path)) {
                  return undefined;
                }

                return {
                  sitemap: {
                    ...page.sitemap,
                    exclude: true,
                  },
                };
              },
            },
            sitemap: {
              enabled: true,
              host: siteConfig.homepage,
            },
          }),
          rsc(),
        ]),
    viteReact(),
    // Keep Babel/React Compiler in dev only if it slows down production bundling
    ...(!isBuild
      ? [
          babel({
            presets: [reactCompilerPreset()],
          }),
        ]
      : []),
    // Removed nitro() since @cloudflare/vite-plugin manages SSR environments
  ],
});

export default config;
