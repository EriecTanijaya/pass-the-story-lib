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
			name: "About",
			link: "/about",
		},
	];

	return (
		<header className="bg-background/80 sticky top-0 z-10 backdrop-blur-md border-b border-b-muted-foreground/50">
			<NavigationMenu
				viewport={isMobile}
				className="max-w-7xl mx-auto px-7 justify-between h-16 flex items-center xl:px-0"
			>
				<Link to="/" className="shrink-0 flex items-center gap-4">
					<img src="/pts-logo.png" alt="logo" className="size-8" />
					<span className="font-bold text-lg leading-5">
						Pass The Story <br /> Library
					</span>
				</Link>

				<NavigationMenuList className="hidden md:flex justify-between">
					{navMenus.map((nav) => (
						<NavigationMenuItem key={nav.name}>
							<Link to={nav.link}>
								{({ isActive }) => {
									const style = isActive
										? "bg-secondary text-foreground"
										: "bg-transparent text-muted-foreground";

									return (
										<NavigationMenuLink
											className={`${navigationMenuTriggerStyle()} ${style}`}
										>
											{nav.name}
										</NavigationMenuLink>
									);
								}}
							</Link>
						</NavigationMenuItem>
					))}
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
