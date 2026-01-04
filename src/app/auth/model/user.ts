export type Role = "member" | "admin";

export type User = {
	id: string;
	name: string;
	role: "member" | "admin";
	profileImageUrl?: string;
};
