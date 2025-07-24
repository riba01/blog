import { notFound } from 'next/navigation';
import { cache } from 'react';
import { postRepository } from '../../repositories/post';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findPostByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});
