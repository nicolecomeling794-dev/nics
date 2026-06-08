import { sql } from "@vercel/postgres";

export { sql };

export const hasDatabaseUrl = Boolean(process.env.POSTGRES_URL);
