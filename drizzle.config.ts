import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/**/*Table.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CF_ACC_ID!,
    databaseId: process.env.CF_DB_ID!,
    token: process.env.CF_D1_TOKEN!,
  },
});
