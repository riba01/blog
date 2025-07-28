import { formatHour } from '@/utils/format-datetime';
import { revalidateExampleAction } from '../../../actions/revalidate-example';

/* export const dynamicParams = true;
export const revalidate = 10; //seconds */
/*

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
} */
export const dynamic = 'force-static';
//para revalidar por tempo
export const revalidate = 10; //seconds

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());
  return (
    <main className='min-h-[600px] text-4xl font-bold'>
      <div>
        Hora: {hour} (ID: {id})
      </div>
      <form action={revalidateExampleAction} className='py-16'>
        <input type='hidden' defaultValue={`/example/${id}`} />
        <button
          type='submit'
          name='path'
          className='p-4 bg-amber-500 text-white rounded-2xl hover:bg-amber-700 cursor-pointer'
        >
          Revalidate
        </button>
      </form>
    </main>
  );
}
