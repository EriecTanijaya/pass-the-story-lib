import { useSession } from "@tanstack/react-start/server";
import { env } from "cloudflare:workers";

type Session = {
  userId: number;
  name: string;
  role: string;
};

export function getAppSession() {
  return useSession<Session>({
    name: "pts-session",
    password: env.SESSION_SECRET,
  });
}
