import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

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
      <div
        className={clsx('flex flex-col gap-4 sm:justify-center text-justify')}
      >
        <time
          className={clsx('text-sm/tight text-slate-600')}
          dateTime='2025-07-01'
        >
          01/07/2025 22:15
        </time>
        <PostHeading as='h1' url={postLink}>
          Título do post
        </PostHeading>
        <p className='text-slate-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, cumque, voluptates, quia quisquam voluptatibus voluptatum
          cumque voluptates quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          saepe suscipit excepturi ratione officiis. Nulla quisquam mollitia
          natus praesentium non atque ab eligendi, quos ex quam laborum dolorem
          accusantium aut.
        </p>
      </div>
    </section>
  );
}
