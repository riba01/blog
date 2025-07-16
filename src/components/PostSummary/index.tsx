import clsx from 'clsx';
import {
  formatDateTime,
  formatRelativeDate,
} from '../../utils/format-datetime';
import { PostHeading, PostHeadingProps } from '../PostHeading';

type PostSummaryProps = {
  postHeading: PostHeadingProps['as'];
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className={clsx('flex flex-col gap-4 sm:justify-center text-justify')}>
      <time
        className={clsx('text-sm/tight text-slate-600')}
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p className='text-slate-600'>{excerpt}</p>
    </div>
  );
}
