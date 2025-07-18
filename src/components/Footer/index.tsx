import Link from 'next/link';

export function Footer() {
  return (
    <footer className='py-8 text-sm'>
      <p className='text-center font-light text-gray-500'>
        <span>
          Copyright &copy; {new Date().getFullYear()} - All rights reserved.{' '}
        </span>
        <Link href={'/'}>The Blog</Link>
      </p>
    </footer>
  );
}
