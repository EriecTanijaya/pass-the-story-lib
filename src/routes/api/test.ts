import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "@tanstack/react-start/server";

export const Route = createFileRoute("/api/test")({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const url = new URL(request.url);
				const searchParams = url.searchParams;
				const val = searchParams.get("key");

				const session = await useSession({
					name: "app-session",
					password: "123asdadl;al;dka;ldkl;asdklasnfjdsngksdngsngsdfkls",
					cookie: {
						sameSite: "lax",
					},
				});

				// const headers = getRequestHeaders();
				// const betterAuthSession = await auth.api.getSession({ headers });

				session.update({ userId: "abc", key: val });

				return Response.json({
					message: "done",
					// betterAuthSession,
				});
			},
		},
	},
});
