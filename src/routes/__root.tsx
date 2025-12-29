import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Scripts,
	useMatchRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Footer } from "@/shared/components/footer";
import { NavigationBar } from "@/shared/components/navigationBar";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Pass The Story Library",
			},
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),

	shellComponent: RootDocument,

	beforeLoad: async () => {
		const user = null;

		return { user };
	},
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { user } = Route.useRouteContext();

	const matchRoute = useMatchRoute();

	const matchedRoute = matchRoute({ to: "/auth" });

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{!matchedRoute && <NavigationBar />}
				{children}
				{!matchedRoute && <Footer />}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
