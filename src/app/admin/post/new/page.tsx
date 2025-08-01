import { Metadata } from 'next';
import { ManagePostForm } from '../../../../components/Admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'New post',
};
export default async function AdminPostNewPage() {
  return (
    <>
      <div className='flex w-full flex-col'>
        <h1 className='text-center text-xl font-bold'>New Post</h1>
      </div>
      <ManagePostForm />
    </>
  );
}
