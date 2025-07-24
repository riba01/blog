import { drizzleDb } from './index';
import { postsTable } from './schema';

(async () => {
  const post = await drizzleDb.select().from(postsTable);
  console.log(post);
})();
