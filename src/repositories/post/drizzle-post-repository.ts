import { PostModel } from '@/models/post/post-model';
import { desc } from 'drizzle-orm';
import { drizzleDb } from '../../db/drizzle';
import { postsTable } from '../../db/drizzle/schema';
import { SIMULATE_WAIT } from '../../lib/constants';
import { asyncDelay } from '../../utils/async-delay';
import { logColor } from '../../utils/log-colors';
import { PostRepository } from './post-repository';

export class DrizzlePostRepository implements PostRepository {
  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT, true);
    logColor('findAll', Date.now());
    const posts = drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
    });

    return posts;
  }
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT, true);
    logColor('findAllPublic', Date.now());
    const posts = drizzleDb.query.posts.findMany({
      orderBy: desc(postsTable.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    // Se o post não for encontrado, lance um erro.
    if (!post) throw new Error('Post não encontrado');

    // Se o código continuar, o TypeScript sabe que 'post' é do tipo PostModel.
    return post;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT, true);
    logColor('findBySlugPublic', Date.now());
    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { and, eq }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    // Se o post não for encontrado, lance um erro.
    if (!post) throw new Error('Post não encontrado');

    // Se o código continuar, o TypeScript sabe que 'post' é do tipo PostModel.
    return post;
  }
}

/* (async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAllPublic();
  posts.forEach(post => console.log(post.slug, post.published));
})(); */
