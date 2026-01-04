import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
	beforeLoad: ({ context }) => {
		const { user } = context;

		if (!user) {
			throw redirect({ to: "/" });
		}
	},
});
