import clsx from 'clsx';
import { Metadata } from 'next';
import { PostCoverImage } from '../../../components/PostCoverImage';
import { PostSummary } from '../../../components/PostSummary';
import { findPostBySlugCached } from '../../../lib/post/queries';

type PostSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);
  return {
    title: `${post.title}`,
    description: `Read the post titled "${post.excerpt}" on our blog.`,
    openGraph: {
      title: `Post - ${post.title}`,
      description: `Read the post titled "${post.title}" on our blog.`,
      url: `/post/${post.slug}`,
    },
  };
}
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

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
