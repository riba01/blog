import clsx from 'clsx';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-300 mb-16 p-8 rounded-2xl',
        'flex flex-col justify-center items-center gap-8',
        'text-center',
      )}
    >
      <div>
        <h1 className='text-7xl font-extrabold mb-4'>404</h1>
        <p className='text-xl font-normal mb-8'> Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <div>
        <Link href='/'>Go back to Home</Link>
      </div>
    </div>
  );
}
