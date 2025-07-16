import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8',
          'sm:text-5xl sm:py-10',
          'md:text-6xl md:py-10',
          'lg:text-7xl lg:py-12',
        )}
      >
        <Link href='/'>The Blog</Link>
      </h1>
    </header>
  );
}
