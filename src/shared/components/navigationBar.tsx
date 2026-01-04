import { ListIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/app/auth/lib/betterAuth/authClient";
import type { User } from "@/app/auth/model/user";
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
	const router = useRouter();
	const location = useLocation();
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

	function _handleSignIn() {
		authClient.oneTap({
			fetchOptions: {
				onSuccess: () => {
					router.invalidate();
				},
			},
		});
	}

	function handleSignOut() {
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.invalidate();
				},
			},
		});
	}

	return (
		<header className="bg-background/80 sticky top-0 z-10 backdrop-blur-md border-b border-b-muted-foreground/50 px-7 xl:px-24">
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
								<Link
									to="/auth"
									search={{
										from: location.pathname,
									}}
								>
									Sign In
								</Link>
							</Button>
						);
					}

					return (
						<div className="hidden md:flex items-center gap-3">
							{user.profileImageUrl ? (
								<img
									src={user.profileImageUrl}
									alt="profile"
									className="size-7 rounded-full"
								/>
							) : (
								<UserIcon weight="bold" className="size-5 rounded-full" />
							)}

							<p className="font-semibold">{user.name}</p>
							<Button variant="outline" size="sm" onClick={handleSignOut}>
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
				className={`md:hidden ${isOpen ? "flex" : "hidden"} space-y-1 py-3 flex-col border-t border-t-secondary`}
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

				{user ? (
					<Button variant="outline" size="sm" onClick={handleSignOut}>
						Logout
					</Button>
				) : (
					<Button asChild>
						<Link
							to="/auth"
							search={{
								from: location.pathname,
							}}
						>
							Sign In
						</Link>
					</Button>
				)}
			</div>
		</header>
	);
}
