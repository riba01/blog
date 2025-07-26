import { formatHour } from '@/utils/format-datetime';

export const dynamicParams = true;
export const revalidate = 10; //seconds

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

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
    </main>
  );
}
