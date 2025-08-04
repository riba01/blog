'use server';

import z from 'zod';
import { makePartialPublicPost, PublicPost } from '../../dto/post/dto';
import { PostCreateSchema } from '../../lib/post/validations';
import { PostModel } from '../../models/post/post-model';
import { getZodErrorMessages } from '../../utils/get-zod-error-messages';

type CreatePostActionProps = {
  formState: PublicPost;
  errors: string[];
  success?: boolean;
};

export async function createPostAction(
  prevState: CreatePostActionProps,
  formData: FormData,
): Promise<CreatePostActionProps> {
  /* console.log({ prevState });
  console.log(formData); */
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }

  //pagar os dados do formulário
  // entries retorna um interator (método) para cada entries retorna um arrya [chave, valor]

  const formDataObj = Object.fromEntries(formData.entries());

  const zodParsedObj = PostCreateSchema.safeParse(formDataObj);

  if (!zodParsedObj.success) {
    const errors = getZodErrorMessages(z.treeifyError(zodParsedObj.error));
    return {
      formState: makePartialPublicPost(formDataObj),
      errors: errors,
    };
  }

  const validPostData = zodParsedObj.data;

  const newPost: PostModel = {
    ...validPostData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: Math.random().toString(36),
  };

  return {
    formState: newPost,
    errors: [],
  };
}
