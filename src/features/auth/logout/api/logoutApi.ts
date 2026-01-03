import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getAppSession } from "@/app/auth/lib/session/tanstackSession";

export const logoutApi = createServerFn({ method: "POST" }).handler(
	async () => {
		const session = await getAppSession();

		await session.clear();

		throw redirect({ to: "/" });
	},
);
