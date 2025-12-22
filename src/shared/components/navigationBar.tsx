import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

type NavMenu = {
  name: string;
  link: string;
};

export function NavigationBar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navMenus: NavMenu[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Meetups",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
  ];

  return (
    <header className="bg-background/80 sticky top-0 z-10 backdrop-blur-md border-b border-b-muted-foreground/50">
      <NavigationMenu
        viewport={isMobile}
        className="max-w-7xl mx-auto px-7 justify-between h-16"
      >
        <div className="shrink-0 flex items-center">
          <span className="font-bold text-xl">Pass The Story Library</span>
        </div>

        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-secondary text-foreground`}
              asChild
            >
              <a href="/">Home</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-white`}
              asChild
            >
              <a href="/books">Books</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-white`}
              asChild
            >
              <a href="#">Meetups</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-white`}
              asChild
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
        className={`md:hidden ${isOpen ? "block" : "hidden"} px-5 space-y-1 py-3 flex flex-col border-t border-t-secondary`}
      >
        {navMenus.map((nav) => (
          <Link key={nav.name} to={nav.link}>
            {({ isActive }) => {
              return (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full"
                >
                  {nav.name}
                </Button>
              );
            }}
          </Link>
        ))}
      </div>
    </header>
  );
}
