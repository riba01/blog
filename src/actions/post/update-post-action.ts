'use server';

import { revalidateTag } from 'next/cache';
import z from 'zod';
import {
  makePartialPublicPost,
  makePublicPostFromDb,
  PublicPost,
} from '../../dto/post/dto';
import { PostUpdateSchema } from '../../lib/post/validations';
import { postRepository } from '../../repositories/post';
import { getZodErrorMessages } from '../../utils/get-zod-error-messages';

type UpdatePostActionProps = {
  formState: PublicPost;
  errors: string[];
  success?: true;
};

export async function updatePostAction(
  prevState: UpdatePostActionProps,
  formData: FormData,
): Promise<UpdatePostActionProps> {
  /* console.log({ prevState });
  console.log(formData); */
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  //pegar o id
  const id = formData.get('id')?.toString() || '';

  if (!id || typeof id !== 'string') {
    return {
      formState: prevState.formState,
      errors: ['ID inválido'],
    };
  }
  //pagar os dados do formulário
  // entries retorna um interator (método) para cada entries retorna um arrya [chave, valor]

  const formDataObj = Object.fromEntries(formData.entries());

  const zodParsedObj = PostUpdateSchema.safeParse(formDataObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(z.treeifyError(zodParsedObj.error));
    return {
      formState: makePartialPublicPost(formDataObj),
      errors: errors,
    };
  }

  const validPostData = zodParsedObj.data;

  const newPost = {
    ...validPostData,
  };

  //
  let post;
  try {
    post = await postRepository.update(id, newPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        formState: makePartialPublicPost(formDataObj),
        errors: [error.message],
      };
    }
    return {
      formState: makePartialPublicPost(formDataObj),
      errors: ['Erro desconhecido'],
    };
  }

  revalidateTag('posts');
  //redireciona
  revalidateTag(`post-${post.slug}`);
  return {
    formState: makePublicPostFromDb(post),
    errors: [],
    success: true,
  };
}
