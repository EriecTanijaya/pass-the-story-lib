import { adminClient, phoneNumberClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, adminRole, memberRole } from "./permission";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_BETTER_AUTH_BASE_URL,
	plugins: [
		phoneNumberClient(),
		adminClient({
			ac,
			roles: {
				admin: adminRole,
				member: memberRole,
			},
		}),
	],
});
