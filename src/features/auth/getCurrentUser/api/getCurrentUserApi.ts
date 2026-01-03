import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { getAppSession } from "@/app/auth/lib/session/tanstackSession";
import type { User } from "@/app/auth/model/user";
import { userTable } from "@/app/auth/model/userTable";
import { db } from "@/shared/lib/db";

export const getCurrentUserApi = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await getAppSession();
		const userId = session.data.userId;

		if (!userId) {
			return {
				success: false,
				error: "User not found",
			};
		}

		const rawUsers = await db
			.select()
			.from(userTable)
			.where(eq(userTable.userId, userId));

		if (!rawUsers.length) {
			return {
				success: false,
				error: "User not found",
			};
		}

		const rawUser = rawUsers[0];

		const user: User = {
			fullName: rawUser.name,
		};

		return {
			success: true,
			user,
		};
	},
);
