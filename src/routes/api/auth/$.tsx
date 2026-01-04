import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/app/auth/lib/betterAuth/authServer";

export const Route = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: async ({ request }: { request: Request }) => {
				return auth.handler(request);
			},
			POST: async ({ request }: { request: Request }) => {
				return auth.handler(request);
			},
		},
	},
});
