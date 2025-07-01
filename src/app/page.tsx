import { PostList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-1'>HEADER</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-1'>FOOTER</h1>
      </footer>
    </div>
  );
}
