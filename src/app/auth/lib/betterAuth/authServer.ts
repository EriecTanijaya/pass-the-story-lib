import { env } from "cloudflare:workers";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, phoneNumber } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { db } from "@/shared/lib/db";
import * as schema from "./authTable";
import { ac, adminRole, memberRole } from "./permission";

/**
 * note: there is hax that delete user after successfully confirm password, to create new account
 *
 * check the ref for fixes, remove the hax after the fixes has been merged
 *
 * ref: https://github.com/better-auth/better-auth/pull/6862/files
 */

export const auth = betterAuth({
	emailAndPassword: {
		enabled: true,
	},

	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema: {
			...schema,
		},
		debugLogs: false,
	}),
	baseURL:
		process.env.CLOUDFLARE_ENV === "prod"
			? env.VITE_BETTER_AUTH_BASE_URL
			: process.env.VITE_BETTER_AUTH_BASE_URL,
	plugins: [
		phoneNumber({
			sendOTP: async ({ phoneNumber, code }) => {
				// note: hax, to auto verify
				await auth.api.verifyPhoneNumber({
					body: {
						phoneNumber,
						code,
					},
				});
			},
			verifyOTP: async ({ phoneNumber, code }) => {
				return true;
			},
			signUpOnVerification: {
				getTempEmail: (phoneNumber) => `${phoneNumber}@pass-the-story.com`,
			},
			sendPasswordResetOTP: async ({ phoneNumber, code }, ctx) => {
				ctx?.setHeader("code", code);
			},
		}),
		admin({
			ac,
			roles: {
				admin: adminRole,
				member: memberRole,
			},
			defaultRole: "member",
		}),
		tanstackStartCookies(),
	],
	user: {
		deleteUser: {
			enabled: true,
		},
	},
});
