import { user as userTable } from "@/app/auth/lib/betterAuth/authTable";
import { db } from "@/shared/lib/db";
import { createServerFn } from "@tanstack/react-start";
import { type } from "arktype";
import { eq } from "drizzle-orm";
import { getAuthSession } from "../../getAuthSession/api/getAuthSession";
import { Role } from "@/app/auth/model/user";

const signInInput = type({
  phoneNumber: "string",
  password: "string",
});

export const signInApi = createServerFn({ method: "POST" })
  .inputValidator(signInInput)
  .handler(async ({ data }) => {
    const users = await db
      .select()
      .from(userTable)
      .where(eq(userTable.phoneNumber, data.phoneNumber));

    if (users.length === 0) {
      return {
        success: false,
        error: "Incorrect phone number or password",
      };
    }

    console.log({ users });

    const user = users[0];

    const session = await getAuthSession();

    await session.update({
      id: user.id,
      name: user.name,
      profileImageUrl: user.image ?? "",
      role: user.role as Role,
    });

    return {
      success: true,
    };
  });
