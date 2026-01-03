import { ListIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import type { User } from "@/app/auth/model/user";
import { logoutApi } from "@/features/auth/logout/api/logoutApi";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

type NavMenu = {
	name: string;
	link: string;
};

type NavigationBarProps = {
	user: User | null;
};

export function NavigationBar({ user }: NavigationBarProps) {
	const isMobile = useIsMobile();
	const [isOpen, setIsOpen] = useState(false);
	const logout = useServerFn(logoutApi);

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
		<header className="bg-background/80 sticky top-0 z-10 backdrop-blur-md border-b border-b-muted-foreground/50 xl:px-24">
			<NavigationMenu viewport={isMobile} className="h-16">
				<Link to="/" className="flex items-center gap-3">
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
									return (
										<Button variant={isActive ? "secondary" : "ghost"}>
											{nav.name}
										</Button>
									);
								}}
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>

				{(() => {
					if (!user) {
						return (
							<Button variant="ghost" className="hidden md:flex" asChild>
								<Link to="/auth">Sign in</Link>
							</Button>
						);
					}

					return (
						<div className="flex items-center gap-3">
							<UserIcon weight="bold" className="size-5 rounded-full" />
							<p className="font-semibold">{user.fullName}</p>
							<Button variant="outline" size="sm" onClick={() => logout()}>
								Logout
							</Button>
						</div>
					);
				})()}

				<div className="md:hidden flex">
					<button type="button" onClick={() => setIsOpen(!isOpen)}>
						{!isOpen ? (
							<ListIcon className="size-6" />
						) : (
							<XIcon className="size-6" />
						)}
					</button>
				</div>
			</NavigationMenu>

			<div
				className={`md:hidden ${isOpen ? "flex" : "hidden"} px-5 space-y-1 py-3 flex-col border-t border-t-secondary`}
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

				<Separator className="mb-3" />

				<Button asChild>
					<Link to="/auth">Sign In</Link>
				</Button>
			</div>
		</header>
	);
}
