import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />
      <section
        className={clsx(
          'grid grid-cols-1 gap-8 mb-16 group',
          'sm:grid-cols-2 sm:justify-center sm:align-middle',
        )}
      >
        <Link
          href='#'
          className={clsx('w-full h-full overflow-hidden rounded-xl')}
        >
          <Image
            className={clsx(
              'group-hover:scale-105 transition',
              'w-full h-full object-cover object-center',
            )}
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Título do post'
            priority
          />
        </Link>
        <div
          className={clsx('flex flex-col gap-4 sm:justify-center text-justify')}
        >
          <time
            className={clsx('text-sm/tight text-slate-600')}
            dateTime='2025-07-01'
          >
            01/07/2025 22:15
          </time>
          <h1
            className={clsx(
              'text-2xl/tight font-extrabold text-slate-900',
              'sm:text-3xl',
            )}
          >
            <Link href='#'>Lorem ipsum dolor sit</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit saepe suscipit excepturi ratione officiis. Nulla
            quisquam mollitia natus praesentium non atque ab eligendi, quos ex
            quam laborum dolorem accusantium aut.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-1'>FOOTER</h1>
      </footer>
    </Container>
  );
}
