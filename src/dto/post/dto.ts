import { PostModel } from '../../models/post/post-model';

export type PublicPost = Omit<PostModel, 'updatedAt'>;

export const makePublicPost = (post: PostModel): PublicPost => {
  return {
    id: post.id,
    slug: post.slug,
    author: post.author,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    published: post.published,
    createdAt: post.createdAt,
  };
};
