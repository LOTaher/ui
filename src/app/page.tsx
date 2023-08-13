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
    <div>
      {/* Hero Section */}
      <div className="flex justify-center items-center h-[70vh]">
        <div className="max-w-screen-xl px-4 pb-1 pt-8 text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-7xl">
            <span className="text-[#ba33ff]">Custom</span> UI Components Powered
            by <span className="text-[#007acc]">Typescript</span> and{" "}
            <span className="text-[#37bcf8]">Tailwind CSS</span>
          </h1>
          <h2 className="text-2xl mb-4">
            A collection of fully customizable UI components for Next.js just a
            copy and paste away.
          </h2>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 mb-3">
            <div
              className={cn(
                buttonVariants({
                  variant: "default",
                }),
                "xl:h-11 sm:h-9 rounded-md px-8 h-10"
              )}
            >
              <Link
                href="/components"
                className="flex items-center xl:text-lg sm:text-sm text-base"
              >
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
                      }),
                      "xl:h-11 sm:h-9 rounded-md px-8 h-10"
                    )}
                  >
                    <Link
                      href="/"
                      className="flex items-center lg:text-lg sm:text-sm text-base"
                    >
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
      {/* Features Section */}
      <div className="max-w-screen-xl pb-1 px-4 pt-4 mx-auto mb-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">📦</h1>
            <h3 className="text-2xl font-bold mb-2">
              No <span className="text-[#ffa500]">Installation</span>
            </h3>
            <p className="text-lg text-center">
              There is no package to install, just copy and paste the components
              you need.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">🚀</h1>
            <h3 className="text-2xl font-bold mb-2">
              Ready to be <span className="text-[#ff0000]">Shipped</span>
            </h3>
            <p className="text-lg text-center">
              The components are able to be used right away, no need to do any
              initial setup.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mb-4">💵</h1>
            <h3 className="text-2xl font-bold mb-2">
              No <span className="text-[#00ff00]">Payment</span>
            </h3>
            <p className="text-lg text-center">
              You can take, change, and use the components without having to pay
              a dime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
