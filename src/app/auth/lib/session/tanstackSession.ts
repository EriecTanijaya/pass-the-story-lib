import { useSession } from "@tanstack/react-start/server";

type Session = {
	userId: number;
	name: string;
	role: string;
};

export function getAppSession() {
	return useSession<Session>({
		name: "pts-session",
		password: process.env.SESSION_SECRET!,
	});
}
