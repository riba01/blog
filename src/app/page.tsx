import clsx from 'clsx';

export default function Home() {
  return (
    <div
      className={clsx(
        { 'text-blue-300': false },
        'text-2xl',
        'font-bold',
        'bg-amber-200',
      )}
    >
      <h1>Olá mundo!</h1>
    </div>
  );
}
