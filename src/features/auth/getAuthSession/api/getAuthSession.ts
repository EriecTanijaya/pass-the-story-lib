import { useSession } from "@tanstack/react-start/server";
import type { User } from "@/app/auth/model/user";

export function getAuthSession() {
  // biome-ignore lint/correctness/useHookAtTopLevel: not react hook
  return useSession<User>({
    name: "pts-session",
    password: process.env.SESSION_SECRET,
  });
}
