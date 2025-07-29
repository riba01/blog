'use server';
import { asyncDelay } from '../../utils/async-delay';
import { logColor } from '../../utils/log-colors';

export async function DeletePostAction(id: string) {
  await asyncDelay(1000, true);
  const postId = id;
  logColor(`Deleting post with ID: ${postId}`);
  return postId;
}
