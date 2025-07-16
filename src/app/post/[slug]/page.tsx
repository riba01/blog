import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { PostCoverImage } from '../../../components/PostCoverImage';
import { PostSummary } from '../../../components/PostSummary';
import { findPostBySlugCached } from '../../../lib/post/queries';

type PostSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = undefined;
  }
  if (!post) notFound();

  const postLink = `/post/${post.slug}`;

  return (
    <section className={clsx('grid grid-cols-1 gap-8 mb-16 group')}>
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
