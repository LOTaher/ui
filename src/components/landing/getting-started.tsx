"use client";
import { useState } from "react";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function GettingStarted() {
  const [copy, setCopy] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(
      "npx create-next-app@latest my-app --typescript --tailwind --eslint"
    );
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl pb-1 px-4 pt-4 mx-auto mt-6 mb-4 ">
        <h1 className="text-4xl font-bold mb-4 mt-4 text-center">
          Initialize a Next.js App and Start Building
        </h1>
        <div className="flex items-center gap-x-4">
          <div className="text-base text-gray-500 text-center block">
            <code>
              npx create-next-app@latest my-app --typescript --tailwind --eslint
            </code>
          </div>
          <button onClick={() => handleCopy()}>
            {copy ? (
              <Icons.check className="h-6 w-6" />
            ) : (
              <Icons.copy className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="flex justify-center mt-4">
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
              View Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
