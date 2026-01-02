import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users", {
	userId: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	username: text().notNull().unique(),
	role: text().notNull(),
});
