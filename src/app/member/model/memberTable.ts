import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const memberTable = sqliteTable("members", {
	memberId: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
	username: text().notNull().unique(),
});
