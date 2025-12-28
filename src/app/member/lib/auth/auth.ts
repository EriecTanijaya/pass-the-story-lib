import { betterAuth } from "better-auth";
import { createAuthClient } from "better-auth/react";

export const auth = betterAuth({});

export const authClient = createAuthClient();
