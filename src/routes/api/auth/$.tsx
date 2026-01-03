import {
	createFileRoute,
	ErrorComponent,
	type ErrorComponentProps,
} from "@tanstack/react-router";

export const Route = createFileRoute("/api/auth/$")({
	server: {
		handlers: {
			GET: async ({ request }: { request: Request }) => {
				return Response.json({ message: "hi" });
			},
			POST: async ({ request }: { request: Request }) => {
				return Response.json({ message: "hi" });
			},
		},
	},
	errorComponent: AuthError,
});

function AuthError({ error }: ErrorComponentProps) {
	return <ErrorComponent error={error} />;
}
