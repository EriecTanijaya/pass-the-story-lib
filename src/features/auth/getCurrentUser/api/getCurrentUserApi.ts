import { getAppSession } from "@/app/auth/lib/session/tanstackSession";
import { userTable } from "@/app/auth/model/userTable";
import { db } from "@/shared/lib/db";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const getCurrentUser = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAppSession();
    const userId = session.data.userId;

    if (!userId) {
      return {
        error: "User not found",
      };
    }

    const rawUsers = await db
      .select()
      .from(userTable)
      .where(eq(userTable.userId, userId));

    if (!rawUsers.length) {
      return {
        error: "User not found",
      };
    }

    const rawUser = rawUsers[0];

    return rawUser;
  },
);
