import { ROLES } from "../model/roleEnum";

type Role = (typeof ROLES)[keyof typeof ROLES];

export function hasPermission(role: Role, requiredRole: Role): boolean {
	const hierarchy = {
		[ROLES.MEMBER]: 0,
		[ROLES.ADMIN]: 1,
	};

	return hierarchy[role] >= hierarchy[requiredRole];
}
