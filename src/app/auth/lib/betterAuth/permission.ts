import { createAccessControl } from "better-auth/plugins";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
	...defaultStatements,
	book: ["create", "read", "update", "delete"],
} as const;

export const ac = createAccessControl(statement);

export const adminRole = ac.newRole({
	book: ["create", "read", "update", "delete"],
	...adminAc.statements,
});

export const memberRole = ac.newRole({
	book: ["read"],
});
