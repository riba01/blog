import { findAllPublicPostsCached } from '@/lib/post/queries';
import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={clsx(
        'grid grid-cols-1 gap-8 mb-16 group',
        'sm:grid-cols-2 sm:justify-center sm:align-middle',
      )}
    >
      <PostCoverImage
        LinkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
        key={'post.id'}
      />
    </section>
  );
}
