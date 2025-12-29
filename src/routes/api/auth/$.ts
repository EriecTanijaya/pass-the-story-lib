import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/app/member/lib/auth/serverAuth";

export const Route = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: async ({ request }: { request: Request }) => {
				return auth.handler(request);
				// return new Response();
			},
			POST: async ({ request }: { request: Request }) => {
				return auth.handler(request);
				// return new Response();
			},
		},
	},
});
