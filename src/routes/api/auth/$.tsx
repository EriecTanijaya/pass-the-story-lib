import {
	createFileRoute,
	ErrorComponent,
	type ErrorComponentProps,
} from "@tanstack/react-router";
import { auth } from "@/app/member/lib/auth/serverAuth";

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
	errorComponent: AuthError,
});

function AuthError({ error }: ErrorComponentProps) {
	return <ErrorComponent error={error} />;
}
