import { getAppSession } from "@/app/auth/lib/session/tanstackSession";
import { userTable } from "@/app/auth/model/userTable";
import { db } from "@/shared/lib/db";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { eq } from "drizzle-orm";

export const login = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { username, password } = data;

    const rawUsers = await db
      .select()
      .from(userTable)
      .where(eq(userTable.username, username));

    if (!rawUsers.length) {
      return {
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

    redirect({ to: "/" });
  });
