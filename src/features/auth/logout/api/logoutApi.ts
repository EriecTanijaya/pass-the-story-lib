import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getAppSession } from "@/app/member/lib/session/tanstackSession";

export const logout = createServerFn({ method: "POST" }).handler(async () => {
	const session = await getAppSession();

	await session.clear();

	redirect({ to: "/" });
});
