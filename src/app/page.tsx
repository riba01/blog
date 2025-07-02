import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <h1 className='text-6xl font-bold text-center py-1'>FOOTER</h1>
      </footer>
    </Container>
  );
}
