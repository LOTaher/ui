"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl justify-between px-4 py-4 sm:px-8">
        <div className="flex items-center py-2 space-x-6">
          <div>
            <Link href="/" className="mr-2 font-bold">
              splatte/ui
            </Link>
          </div>
          <Link
            href="/components"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/components"
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Components
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link target="_blank" href="https://github.com/LOTaher/ui">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.github className="h-6 w-6 fill-current" />
              <span className="sr-only">Github</span>
            </div>
          </Link>
          <Link target="_blank" href="https://twitter.com/SplatteDev">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-6 w-6 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
