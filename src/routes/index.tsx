import { createFileRoute } from "@tanstack/react-router";
import { getSeoHead } from "../lib/seo";
import { siteConfig } from "../lib/site-config";
import RetroDither from "@/components/canvasui/RetroDither";

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
    <div className="width container mx-auto px-4">
      <div className="w-full h-1 py-2" />
      <RetroDither
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
      </RetroDither>
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
