import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconCopy,
  IconSparkles,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

import { registryNavigationItems } from "../lib/registry/catalog-navigation";
import {
  getRegistryItemRoutePath,
  getRegistrySectionIdForType,
  type RegistrySectionId,
} from "../lib/registry/sections";
import { getSeoHead } from "../lib/seo";
import { getCanonicalRegistryItemUrl, siteConfig } from "../lib/site-config";

// Registry metadata is static at build time, so derive everything once at module level.
const sectionCounts = registryNavigationItems.reduce<Record<RegistrySectionId, number>>(
  (counts, item) => {
    counts[getRegistrySectionIdForType(item.type)] += 1;
    return counts;
  },
  { components: 0, blocks: 0, "utilities-and-hooks": 0 },
);

const featuredItem =
  registryNavigationItems.find((item) => item.type === "registry:block") ??
  registryNavigationItems[0];

const installCommand = featuredItem
  ? `npx shadcn@latest add ${getCanonicalRegistryItemUrl(featuredItem.name)}`
  : null;

const sections = [
  {
    id: "components",
    title: "Components",
    arabic: "المكوّنات",
    description: "Accessible primitives, tuned for right-to-left from the first pixel.",
    preview: <ComponentsPreview />,
  },
  {
    id: "blocks",
    title: "Blocks",
    arabic: "القوالب",
    description: "Production-ready sections that compose components into full interfaces.",
    preview: <BlocksPreview />,
  },
  {
    id: "utilities-and-hooks",
    title: "Utilities & Hooks",
    arabic: "الأدوات والخطافات",
    description: "Hooks, libraries, and themes that round out what you build.",
    preview: <UtilitiesPreview />,
  },
] as const satisfies readonly {
  id: RegistrySectionId;
  title: string;
  arabic: string;
  description: string;
  preview: ReactNode;
}[];

const principles = [
  {
    title: "RTL by default",
    arabic: "العربية أولاً",
    description:
      "Every component is designed and tested right-to-left, not flipped at the last minute.",
  },
  {
    title: "Accessible primitives",
    arabic: "متاح للجميع",
    description: "Built on Base UI with full keyboard and screen reader support.",
  },
  {
    title: "Own the source",
    arabic: "الكود ملكك",
    description: "Installed straight into your project with shadcn, so you can change anything.",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () =>
    getSeoHead({
      title: siteConfig.name,
      description: siteConfig.description,
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Same container as SiteHeader so the banner edges line up with the nav. */}
      <section className="mx-auto max-w-screen-2xl p-4">
        {/* Fill the viewport below the sticky header (3.5rem + 1px border) and the 2rem of section padding. */}
        <div className="relative isolate flex h-[calc(100svh-5.5rem-1px)] min-h-136 flex-col overflow-hidden rounded-[1.75rem] border border-foreground/5 bg-muted text-foreground shadow-xl shadow-primary/10 sm:rounded-[1.7rem]">
          <img
            src="/Golden Hour Over Mecca.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="home-drift absolute inset-0 -z-20 size-full object-cover object-[center_70%]"
          />
          {/* Light sky wash, a soft glow behind the centered copy, and a vignette for depth. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-b from-background/60 via-background/20 via-35% to-transparent to-60%"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-radial-[ellipse_55%_45%_at_50%_50%] from-background/55 via-background/45 dark:from-background/55 dark:via-background/25 via-55% to-transparent "
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-radial-[ellipse_at_center] from-transparent from-60% to-foreground/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-background/30 ring-inset"
          />

          <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-12 text-center sm:px-10">
            <Link
              to={
                featuredItem
                  ? getRegistryItemRoutePath(featuredItem)
                  : "/registry"
              }
              className="home-reveal group/badge inline-flex items-center gap-2 rounded-full border border-input bg-background py-1 ps-1 pe-3 text-xs text-foreground/70 transition-colors hover:text-foreground"
            >
              <span className="rounded-full bg-primary px-2 py-0.5 text-[0.7rem] font-semibold text-primary-foreground">
                New
              </span>
              <span>
                {featuredItem
                  ? `${featuredItem.title} is now available`
                  : "New blocks"}
              </span>
              <IconArrowRight className="size-3 opacity-60 transition-transform group-hover/badge:translate-x-0.5" />
            </Link>

            <h1 className="home-reveal up mt-6 font-IBM text-4xl leading-[1.1] font-bold text-balance [animation-delay:80ms] sm:text-5xl md:text-6xl">
              The Arabic UI library
              <span className="block text-chart-2">
                For Islamic Applications.
              </span>
            </h1>

            <p className="home-reveal mt-5 max-w-xl text-base leading-7 text-pretty text-foreground/75 [animation-delay:160ms] sm:text-lg">
              RTL-first components and blocks for shadcn/ui and Tailwind.
            </p>

            <div className="home-reveal mt-7 flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
              <Button
                size="lg"
                className="h-11 rounded-full px-6 text-base shadow-lg shadow-primary/25"
                nativeButton={false}
                render={
                  <Link to="/$section" params={{ section: "components" }} />
                }
              >
                Get started
                <IconArrowRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full bg-background/70 px-6 text-base backdrop-blur-md hover:bg-background"
                nativeButton={false}
                render={<Link to="/docs" />}
              >
                Read the docs
                <IconArrowUpRight data-icon="inline-end" />
              </Button>
            </div>

            {installCommand ? (
              <InstallChip
                command={installCommand}
                className="home-reveal mt-5 border-none [animation-delay:320ms]"
              />
            ) : null}
          </div>
        </div>
      </section>

      <section
        id="explore"
        className="mx-auto max-w-screen-2xl scroll-mt-20 px-4 pt-16 pb-16 sm:pt-20"
      >
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Start here · {siteConfig.namespace}
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Everything you need, production-ready.
            </h2>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="h-11 self-start rounded-full px-5 sm:self-auto"
            nativeButton={false}
            render={<Link to="/registry" />}
          >
            Browse the full registry
            <IconArrowUpRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.id}
              to="/$section"
              params={{ section: section.id }}
              className="group flex flex-col rounded-[1.5rem] border bg-muted/40 p-2 transition-colors hover:border-primary/50 hover:bg-muted/70"
            >
              <div className="home-pattern relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.1rem] border bg-card">
                {section.preview}
                <span className="absolute inset-s-3 top-3 rounded-full bg-primary px-2.5 py-0.5 font-mono text-xs font-semibold text-primary-foreground tabular-nums">
                  {sectionCounts[section.id]}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold">{section.title}</h3>

                  <span
                    lang="ar"
                    dir="rtl"
                    className="text-sm text-muted-foreground"
                  >
                    {section.arabic}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium">
                  Explore
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-4 pb-24">
        <div className="grid overflow-hidden rounded-[1.5rem] border md:grid-cols-3 md:divide-x">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="flex flex-col gap-3 border-b p-7 last:border-b-0 sm:p-8 md:border-b-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 font-mono text-sm font-semibold text-chart-2">
                  {index + 1}
                </span>
                <span
                  lang="ar"
                  dir="rtl"
                  className="text-sm text-muted-foreground"
                >
                  {principle.arabic}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{principle.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <IconSparkles className="size-4 text-primary" />
          Built for interfaces that serve the ummah.
        </p>
      </section>
    </main>
  );
}

function InstallChip({ command, className }: { command: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be unavailable (insecure context); the command stays selectable.
    }
  };

  return (
    <div
      dir="ltr"
      className={`flex w-full max-w-md items-center gap-2 rounded-full border bg-foreground/90 py-1.5 ps-4 pe-1.5 text-background shadow-lg backdrop-blur-md ${
        className ?? ""
      }`}
    >
      <span aria-hidden="true" className="font-mono text-sm text-primary">
        $
      </span>
      <code className="min-w-0 flex-1 truncate text-start font-mono text-xs sm:text-sm">
        {command}
      </code>
      <button
        type="button"
        onClick={() => void copy()}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
      >
        {copied ? <IconCheck className="size-4" /> : <IconCopy className="size-4" />}
      </button>
    </div>
  );
}

function ComponentsPreview() {
  return (
    <div
      lang="ar"
      dir="rtl"
      className="flex w-[70%] flex-col gap-3 transition-transform duration-500 group-hover:scale-[1.03]"
    >
      <div className="flex h-10 items-center rounded-lg border bg-background px-3 text-sm text-muted-foreground shadow-xs">
        ابحث عن سورة…
      </div>
      <div className="flex gap-2">
        <span className="flex h-9 flex-1 items-center justify-center rounded-lg bg-foreground text-sm font-medium text-background">
          متابعة
        </span>
        <span className="flex h-9 flex-1 items-center justify-center rounded-lg border bg-background text-sm">
          إلغاء
        </span>
      </div>
      <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2 text-sm">
        تذكير بالأذان
        <span className="flex h-5 w-9 items-center justify-end rounded-full bg-primary p-0.5">
          <span className="size-4 rounded-full bg-background shadow-sm" />
        </span>
      </div>
    </div>
  );
}

const prayerTimes = [
  { name: "الفجر", time: "4:52", next: false },
  { name: "الظهر", time: "12:18", next: true },
  { name: "العصر", time: "3:41", next: false },
] as const;

const activityBars = [40, 65, 50, 85, 60, 95, 75] as const;

function BlocksPreview() {
  return (
    <div
      lang="ar"
      dir="rtl"
      className="w-[76%] rounded-xl border bg-background p-4 shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>مواقيت اليوم</span>
        <span className="font-mono">١٤٤٨ هـ</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {prayerTimes.map((prayer) => (
          <div
            key={prayer.name}
            className={`rounded-lg p-2 text-center ${prayer.next ? "bg-primary/20" : "bg-muted"}`}
          >
            <div className="text-[0.7rem] text-muted-foreground">{prayer.name}</div>
            <div className="font-mono text-sm font-semibold">{prayer.time}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-12 items-end gap-1">
        {activityBars.map((height) => (
          <span
            key={height}
            style={{ height: `${height}%` }}
            className="flex-1 rounded-sm bg-foreground/80 last:bg-primary"
          />
        ))}
      </div>
    </div>
  );
}

function UtilitiesPreview() {
  return (
    <div
      dir="ltr"
      className="w-[76%] rounded-xl border bg-background p-4 font-mono text-xs leading-6 shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
    >
      <div>
        <span className="text-chart-2">const</span> {"{ copy }"} =
      </div>
      <div className="ps-4">useCopyToClipboard();</div>
      <div className="mt-2 text-muted-foreground">{'// dir="rtl" ✓'}</div>
      <div>
        <span className="text-chart-2">import</span> {"{ cn }"}{" "}
        <span className="text-chart-2">from</span>{" "}
        <span className="text-chart-4">"@/lib/utils"</span>
      </div>
    </div>
  );
}
