import { ManagePostForm } from '../../../../components/Admin/ManagePostForm';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='flex w-full flex-col'>
        <h1 className='text-center text-2xl'>Admin New Post Page</h1>
      </div>
      <ManagePostForm />
    </>
  );
}
