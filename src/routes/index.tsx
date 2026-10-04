import { createFileRoute } from "@tanstack/react-router";
import { getSeoHead } from "../lib/seo";
import { siteConfig } from "../lib/site-config";
import { useTheme } from "@/components/docs/theme-provider";

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
  const { resolvedTheme } = useTheme();

  return (
    <div className="width container mx-auto px-4">
      <div className="w-full h-1 py-2" />
      <div
        className="relative select-none h-[90vh] py-32 overflow-hidden rounded-lg border-input  before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.064] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
      >
        <img
          className="absolute  w-full h-full left-0 top-0 blur-[2px] select-none"
          src={
            resolvedTheme == "dark"
              ? "main-panner-night.png"
              : "main-panner.png"
          }
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full" />
        <h2 className="absolute top-3/7 left-1/2 text-center -translate-1/2 text-7xl w-full  text-foreground/80 dark:text-foreground/80 font-IBM font-semibold">
          UI Library For Islamic Applications
        </h2>
      </div>
      {/* <RetroDither
        // className="w-full max-h-min"
        className="relative h-[80vh] overflow-hidden rounded-lg"
        radius={1}
        pixelSize={2}
        softness={0.6}
        trail={0}
        pattern="bayer"
      >
        <img
          className="w-full h-full object-cover blur-[2px]"
          src="main-panner.png"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent"></div>
      </RetroDither> */}
      {/* <PixelDistort
        className="relative h-[80vh] overflow-hidden rounded-lg blur-[5px]"
        src="main-panner.png"
        grid={80} // chunkier cells
        strength={0.001} // a sweep drags further
        relax={0.2} // cells take longer to settle
      /> */}
      {/* <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 sm:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <img
            className="w-[300px] object-center"
            src="/makkah-ui.png"
            width={300}
          />
          <h1 className="font-mono text-2xl font-bold tracking-tighter sm:text-3xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-lg text-base text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <Link to="/$section" params={{ section: "components" }} />
              }
            >
              <IconBlocks data-icon="inline-start" />
              مشاهدة المزيد
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              // oxlint-disable-next-line jsx-a11y/control-has-associated-label -- Label is provided by the parent's children.
              render={
                <a
                  href={siteConfig.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <IconBrandGithub data-icon="inline-start" />
              GitHub
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
