import { env } from "cloudflare:workers";
import { betterAuth } from "better-auth";
import { oneTap } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const authApi = betterAuth({
	baseURL: env.VITE_BETTER_AUTH_BASE_URL,
	secret: env.BETTER_AUTH_SECRET,
	plugins: [oneTap(), tanstackStartCookies()],
});
