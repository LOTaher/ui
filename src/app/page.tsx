import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

async function getRepoStars() {
  const res = await fetch("https://api.github.com/repos/LOTaher/ui");
  const json = await res.json();
  return json.stargazers_count;
}

export default async function Home() {
  const stars = await getRepoStars();

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="max-w-screen-xl px-4 pb-1 pt-8 text-center lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Custom UI Components Powered by{" "}
          <span className="text-[#007acc]">Typescript</span> and{" "}
          <span className="text-[#007acc]">Tailwind CSS</span>
        </h1>
        <h2 className="text-xl mb-4">
          A collection of fully customizable UI components for Next.js just a
          copy and paste away.
        </h2>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <div
            className={cn(
              buttonVariants({
                variant: "default",
              })
            )}
          >
            <Link href="/components" className="">
              Get Started
            </Link>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={cn(
                    buttonVariants({
                      variant: "default",
                    })
                  )}
                >
                  <Link href="/" className="flex items-center">
                    <Icons.star className="fill-[#e2b340] h-6 w-6 mr-2" />{" "}
                    {stars}
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Star us on Github</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
