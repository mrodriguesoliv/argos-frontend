import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://postgres.cdkvzwqaegvdhhnihtmc:uxMqb7E7vQ@uBXz@aws-0-sa-east-1.pooler.supabase.com:6543/postgres",
  },
  migrations: {
    table: 'my-migrations-table',
    schema: 'public',
  },
});