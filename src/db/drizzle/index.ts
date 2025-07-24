import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { resolve } from 'path';
import { postsTable } from './schema';

const dbPath = resolve(process.cwd(), 'db.sqlite3');
const db = new Database(dbPath);

export const drizzleDb = drizzle(db, {
  logger: true,
  schema: {
    posts: postsTable,
  },
});
