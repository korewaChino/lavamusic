import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

if (!env.DATABASE_URL) env.DATABASE_URL = "file:./lavamusic-pgdata";

const isPgLite =
  !env.DATABASE_URL.startsWith("postgres://") &&
  !env.DATABASE_URL.startsWith("postgresql://");

export default defineConfig({
  out: "./drizzle/postgres",
  schema: "./src/database/schemas.ts",
  dialect: "postgresql",
  driver: isPgLite ? "pglite" : "pg",
  dbCredentials: { url: env.DATABASE_URL },
});
