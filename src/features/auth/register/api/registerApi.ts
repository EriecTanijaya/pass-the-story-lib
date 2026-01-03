import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { getAppSession } from "@/app/auth/lib/session/tanstackSession";
import { ROLES } from "@/app/auth/model/roleEnum";
import { userTable } from "@/app/auth/model/userTable";
import { db } from "@/shared/lib/db";

export const registerApi = createServerFn({ method: "POST" })
	.inputValidator(
		(data: { username: string; password: string; fullName: string }) => data,
	)
	.handler(async ({ data }) => {
		const { fullName, password, username } = data;

		const rawUsers = await db
			.select()
			.from(userTable)
			.where(eq(userTable.username, username));

		if (rawUsers.length) {
			return {
				success: false,
				error: "Username has been taken",
			};
		}

		const inserteds = await db
			.insert(userTable)
			.values({ name: fullName, role: ROLES.MEMBER, username })
			.returning({ createdUserId: userTable.userId });

		const createdUserId = inserteds[0].createdUserId;

		const session = await getAppSession();
		await session.update({
			userId: createdUserId,
			name: fullName,
			role: ROLES.MEMBER,
		});

		return {
			success: true,
			user: {
				id: createdUserId,
				name: fullName,
				role: ROLES.MEMBER,
			},
		};
	});
