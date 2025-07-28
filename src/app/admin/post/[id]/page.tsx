export const dynamic = 'force-dynamic';

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  return (
    <div className='container flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Admin Post ID Page {id}</h1>
      <p>Admin Post ID page content</p>
    </div>
  );
}
