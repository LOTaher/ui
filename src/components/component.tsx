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
            {/* Dialog Content */}
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
              <Button>Copy</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
