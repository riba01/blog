import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = 'post-featured';
  const postLink = `/post/${slug}`;
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
          src: '/images/bryen_9.png',
          alt: 'Imagem de capa do post',
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={'2025-07-16T14:23:00.616Z'}
        title={'Título do post'}
        excerpt={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        key={'post.id'}
      />
    </section>
  );
}
