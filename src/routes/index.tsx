import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ListIcon,
  SparkleIcon,
  TagIcon,
  TranslateIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <NavigationMenu
          viewport={isMobile}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between h-16"
        >
          <div className="shrink-0 flex items-center">
            <span className="font-bold text-xl">Pass The Story Library</span>
          </div>

          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-secondary text-foreground`}
              >
                <a href="#">Home</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-white`}
              >
                <a href="#">Books</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-white`}
              >
                <a href="#">Meetups</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-white`}
              >
                <a href="#">About</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <div className="md:hidden flex">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <ListIcon className="size-6" />
              ) : (
                <XIcon className="size-6" />
              )}
            </button>
          </div>

          <Button variant="ghost" className="hidden md:visible">
            Sign in
          </Button>
        </NavigationMenu>

        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} px-5 space-y-1 py-3 flex flex-col border-t-1 border-t-secondary`}
        >
          <Button
            variant="secondary"
            className="bg-secondary text-foreground"
            asChild
          >
            <a href="#">Home</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Books</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Meetups</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">About</a>
          </Button>
        </div>
      </header>

      <main className="max-w-7xl">
        <section className="flex flex-col bg-primary px-4 gap-3 items-center py-20">
          <div className="flex rounded-full text-sm px-4 py-2 bg-primary-foreground/10 text-primary-foreground/90 mb-9">
            <SparkleIcon className="size-4" />
            Community-powered book sharing
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground">
            Read, Share, and Connect
          </h1>
          <p className="text-primary-foreground/80">
            Imagine borrowing books shared by fellow members.
          </p>

          <div className="flex gap-3 mt-9">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary font-semibold shadow-lg"
            >
              Browse Books
            </Button>
            <Button
              size="lg"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground"
            >
              How It Works
            </Button>
          </div>
        </section>

        <h2 className="text-xl font-bold ml-4 my-4">Featured Books</h2>
        <section className="flex justify-between overflow-auto gap-3">
          <Card className="flex flex-col bg-white pt-0 w-full md:w-[280px] first:ml-4 last:mr-4">
            <CardHeader className="p-0 relative">
              <img
                src="/landscape.jpg"
                alt="book"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>The Dusk Library</CardTitle>
              <CardDescription>Jeff Heferson</CardDescription>

              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <TagIcon className="h-3 w-3 fill-gray-800" />
                  Fiction
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">wowzer</Badge>
                <Badge variant="secondary">heart breaking</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button className="flex-1">Reserve</Button>

              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-white pt-0 w-full md:w-[280px]">
            <CardHeader className="p-0 relative">
              <img
                src="/landscape.jpg"
                alt="book"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>The Dusk Library</CardTitle>
              <CardDescription>Jeff Heferson</CardDescription>

              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <TagIcon className="h-3 w-3 fill-gray-800" />
                  Fiction
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">wowzer</Badge>
                <Badge variant="secondary">heart breaking</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button className="flex-1">Reserve</Button>

              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-white pt-0 w-full md:w-[280px]">
            <CardHeader className="p-0 relative">
              <img
                src="/landscape.jpg"
                alt="book"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>The Dusk Library</CardTitle>
              <CardDescription>Jeff Heferson</CardDescription>

              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <TagIcon className="h-3 w-3 fill-gray-800" />
                  Fiction
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">wowzer</Badge>
                <Badge variant="secondary">heart breaking</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button className="flex-1">Reserve</Button>

              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col bg-white pt-0 w-full md:w-[280px] last:mr-4">
            <CardHeader className="p-0 relative">
              <img
                src="/landscape.jpg"
                alt="book"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle>The Dusk Library</CardTitle>
              <CardDescription>Jeff Heferson</CardDescription>

              <div className="flex gap-2 text-xs text-muted-foreground">
                <span className="flex gap-1 items-center">
                  <TagIcon className="h-3 w-3 fill-gray-800" />
                  Fiction
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
                <span className="flex gap-1 items-center">
                  <TranslateIcon className="h-3 w-3 fill-gray-800" />
                  English
                </span>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">wowzer</Badge>
                <Badge variant="secondary">heart breaking</Badge>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button className="flex-1">Reserve</Button>

              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
