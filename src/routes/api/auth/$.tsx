import { createFileRoute } from "@tanstack/react-router";
import { authApi } from "@/app/auth/lib/betterAuth/authServer";

export const Route = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: async ({ request }: { request: Request }) => {
				return authApi.handler(request);
			},
			POST: async ({ request }: { request: Request }) => {
				return authApi.handler(request);
			},
		},
	},
});
