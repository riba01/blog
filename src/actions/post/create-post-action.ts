'use server';

import { PublicPost } from '../../dto/post/dto';

type CreatePostActionProps = {
  formState: PublicPost;
  errors: string[];
  success?: boolean;
};

export async function createPostAction(
  prevState: CreatePostActionProps,
  formData: FormData,
): Promise<CreatePostActionProps> {
  console.log({ prevState });
  console.log(formData);

  return {
    formState: prevState.formState,
    errors: [],
  };
}
