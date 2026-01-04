import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";

export const db = drizzle(env.pass_the_story_db);

db.$client
	.exec(`select 1`)
	.then(() => {
		console.log(`DB connection OK`);
	})
	.catch(() => {
		console.log(`DB connection ERROR`);
	});
