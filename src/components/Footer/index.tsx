import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-8'>
      <p className='text-center font-bold text-gray-500'>
        <span>
          Copyright &copy; {new Date().getFullYear()} - All rights reserved.{' '}
        </span>
        <Link href={'/'}>The Blog</Link>
      </p>
    </footer>
  );
}
