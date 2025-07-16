import clsx from 'clsx';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-200 mb-16 p-8 rounded-2xl',
        'flex flex-col justify-center items-center',
        'text-center',
      )}
    >
      <div>
        <h1 className='text-7xl font-extrabold mb-8'>404</h1>
        <p className='text-sm font-normal mb-8 text-slate-400'>
          {' '}
          Page Not Found Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <div className='text-md font-normal'>
        <Link href='/'>Go back to Home</Link>
      </div>
    </div>
  );
}
