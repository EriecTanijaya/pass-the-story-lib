import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";
import { user as userTable } from "@/app/auth/lib/betterAuth/authTable";
import { db } from "@/shared/lib/db";

export const checkUserExistsApi = createServerFn()
	.inputValidator((data: { phoneNumber: string }) => data)
	.handler(async ({ data }) => {
		const { phoneNumber } = data;

		const rawUsers = await db
			.select()
			.from(userTable)
			.where(eq(userTable.phoneNumber, phoneNumber));

		return rawUsers.length > 0;
	});
