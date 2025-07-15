import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const baseClass = {
    h1: 'text-2xl/tight font-extrabold text-slate-900 sm:text-4xl',
    h2: 'text-xl/tight font-extrabold text-slate-900 sm:text-3xl',
    h3: 'text-lg/tight font-extrabold text-slate-900 sm:text-2xl',
    h4: 'text-md/tight font-extrabold text-slate-900 sm:text-xl',
    h5: 'text-sm/tight font-extrabold text-slate-900 sm:text-lg',
    h6: 'text-sm/tight font-extrabold text-slate-900 sm:text-md',
  };
  return (
    <Tag className={clsx(baseClass[Tag])}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
