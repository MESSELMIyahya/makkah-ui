"use client";

import { DirectionProvider } from "@base-ui/react/direction-provider";
import { IconAppWindow, IconCode } from "@tabler/icons-react";
import type { ReactNode } from "react";

import type { RegistryPreviewLanguage } from "../../lib/registry/previews";
import { cn } from "../../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { CodeBlock } from "./code-block";
import { setPreviewLanguage, usePreviewLanguage } from "./preview-language";

type PreviewCardProps = {
  /** Arabic preview element; together with `en` it enables the language switcher. */
  ar?: ReactNode;
  en?: ReactNode;
  /** Single-language preview used when the example is not bilingual. */
  single?: ReactNode;
  code: string;
  highlightedHtml: string;
  className?: string;
};

const languages = [
  { value: "ar", label: "ع", title: "العربية" },
  { value: "en", label: "EN", title: "English" },
] as const satisfies readonly {
  value: RegistryPreviewLanguage;
  label: string;
  title: string;
}[];

export function PreviewCard({
  ar,
  en,
  single,
  code,
  highlightedHtml,
  className,
}: PreviewCardProps) {
  const language = usePreviewLanguage();
  const isBilingual = ar !== undefined && en !== undefined;
  const activeLanguage = isBilingual ? language : ar !== undefined ? "ar" : "en";
  const dir = activeLanguage === "ar" ? "rtl" : "ltr";
  const preview = isBilingual ? (language === "ar" ? ar : en) : (single ?? ar ?? en);

  return (
    <Tabs defaultValue="preview" className={cn("not-prose gap-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <TabsList variant="line">
          <TabsTrigger value="preview">
            <IconAppWindow data-icon="inline-start" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <IconCode data-icon="inline-start" />
            Code
          </TabsTrigger>
        </TabsList>
        {isBilingual ? (
          <ToggleGroup
            aria-label="Preview language"
            variant="outline"
            size="sm"
            spacing={0}
            value={[language]}
            onValueChange={(values) => {
              const next = values[0];

              if (next === "ar" || next === "en") {
                setPreviewLanguage(next);
              }
            }}
          >
            {languages.map((item) => (
              <ToggleGroupItem
                key={item.value}
                value={item.value}
                title={item.title}
                aria-label={item.title}
                className="min-w-9 text-xs"
              >
                {item.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        ) : null}
      </div>
      <TabsContent value="preview">
        <div
          data-slot="component-preview"
          className="grid min-h-72 place-items-center rounded-lg border bg-background p-6"
        >
          <DirectionProvider direction={dir}>
            <div
              data-slot="component-preview-stage"
              lang={activeLanguage}
              dir={dir}
              className="grid min-h-60 w-full place-items-center"
            >
              {preview}
            </div>
          </DirectionProvider>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={code} highlightedHtml={highlightedHtml} />
      </TabsContent>
    </Tabs>
  );
}
