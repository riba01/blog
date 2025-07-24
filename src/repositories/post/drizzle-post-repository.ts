import { PostModel } from '@/models/post/post-model';
import { desc } from 'drizzle-orm';
import { drizzleDb } from '../../db/drizzle';
import { postsTable } from '../../db/drizzle/schema';
import { PostRepository } from './post-repository';

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    throw new Error('Method not implemented.');
  }
  async findAllPublic(): Promise<PostModel[]> {
    const posts = drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();
  posts.forEach(post => console.log(post.slug, post.published));
})();
