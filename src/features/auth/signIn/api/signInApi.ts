import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { getAppSession } from "@/app/auth/lib/session/tanstackSession";
import { userTable } from "@/app/auth/model/userTable";
import { db } from "@/shared/lib/db";

export const loginApi = createServerFn({ method: "POST" })
	.inputValidator((data: { userName: string; password: string }) => data)
	.handler(async ({ data }) => {
		const { userName, password } = data;

		const rawUsers = await db
			.select()
			.from(userTable)
			.where(eq(userTable.username, userName));

		if (!rawUsers.length) {
			return {
				success: false,
				error: "User not registered",
			};
		}

		if (!rawUsers.length) {
			return {
				success: false,
				error: "User not registered",
			};
		}

		const rawUser = rawUsers[0];

		const session = await getAppSession();

		await session.update({
			name: rawUser.name,
			role: rawUser.role,
			userId: rawUser.userId,
		});

		return {
			success: true,
		};
	});
