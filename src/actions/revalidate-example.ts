'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  // This function is used to trigger a revalidation of the example data.
  // It can be called from the server-side to ensure that the latest data is fetched.
  console.log(' Estou em uma pagina action...');
  // Add your revalidation logic here, such as clearing caches or updating data sources.
  const path = formData.get('path') as string;
  console.log(`Revalidating path: ${path}`);
  revalidatePath(path, 'page');
}
