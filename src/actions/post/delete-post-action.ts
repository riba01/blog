'use server';
import { revalidateTag } from 'next/cache';
import { postRepository } from '../../repositories/post';
import { asyncDelay } from '../../utils/async-delay';
import { logColor } from '../../utils/log-colors';

export async function DeletePostAction(id: string) {
  //TODO: checar se o usuário tem permissap para deletar o post

  // TODO: remover linhas abaixo
  await asyncDelay(1000, true);
  const postId = id;
  logColor(`Deleting post with ID: ${postId}`);

  if (!postId || typeof postId !== 'string') {
    return {
      error: 'Invalid post ID',
    };
  }
  // Aqui posso implementar a lógica de exclusão do post
  const post = await postRepository.findById(postId).catch(() => undefined);
  if (!post) {
    return {
      error: 'Error: Post not found',
    };
  }

  await postRepository.delete(postId);

  revalidateTag('posts');
  revalidateTag(`post-${post.slug}`);

  return {
    error: '',
  };
}
