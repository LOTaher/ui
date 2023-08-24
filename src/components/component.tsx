"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import Code from "./code";
import { Icons } from "./icons";
import { useState } from "react";

interface ComponentProps {
  title: string;
  description: string;
  component: React.ReactNode;
  nextjs: string;
  reactjs: string;
}

export default function Component({
  title,
  description,
  component,
  nextjs,
  reactjs,
}: ComponentProps) {
  const [copy, setCopy] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(nextjs);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center content-center">
        {component}
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button>View Code</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <Tabs>
              <TabsList>
                <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                <TabsTrigger value="reactjs">React.js</TabsTrigger>
              </TabsList>
              <TabsContent value="nextjs">
                <div className="flex w-full content-center justify-center">
                  <ScrollArea className="h-72 w-96">
                    <Code language="javascript" code={nextjs} show />
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="reactjs">
                <div className="flex w-full content-center justify-center">
                  <ScrollArea className="h-72 w-96">
                    <Code language="javascript" code={reactjs} show />
                  </ScrollArea>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <button onClick={() => handleCopy()}>
                {copy ? (
                  <Icons.check className="h-5 w-5" />
                ) : (
                  <Icons.copy className="h-5 w-5" />
                )}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
