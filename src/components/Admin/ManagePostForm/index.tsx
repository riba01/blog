'use client';

import clsx from 'clsx';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createPostAction } from '../../../actions/post/create-post-action';
import { makePartialPublicPost, PublicPost } from '../../../dto/post/dto';
import { Buttom } from '../../Buttom';
import { InputCheckbox } from '../../InputCheckbox';
import { InputText } from '../../InputText';
import { MarkdownEditor } from '../../MarkdownEditor';
import { ImageUploader } from '../ImageUpLoarder';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );
  useEffect(() => {
    if (state.errors.length > 0) {
      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className='mb-16'>
      <div
        className={clsx(
          'flex flex-col',
          'my-8 items-start justify-start gap-4',
        )}
      >
        <InputText
          placeholder='ID gerado automaticamente'
          labelText='ID'
          name='id'
          type='text'
          defaultValue={formState.id}
          readOnly
        />
        <InputText
          placeholder='Slug gerada automaticamente'
          labelText='Slug'
          name='slug'
          type='text'
          defaultValue={formState.slug}
          readOnly
        />
        <InputText
          placeholder='Digite o nome do autor do post'
          labelText='Autor'
          name='author'
          type='text'
          defaultValue={formState.author}
        />
        <InputText
          placeholder='Digite o título do texto'
          labelText='Título'
          name='title'
          type='text'
          defaultValue={formState.title}
        />
        <InputText
          placeholder='Digite o resumo do post'
          labelText='Resumo'
          name='excerpt'
          type='text'
          defaultValue={formState.excerpt}
        />
        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />

        <ImageUploader />
        <InputText
          placeholder='URL da imagem de capa'
          labelText='URL da imagem de capa'
          name='coverImageUrl'
          type='text'
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          labelText={'Publicar?'}
          name='published'
          defaultChecked={formState.published}
        />

        <div className='mt-4'>
          <Buttom
            type='submit'
            variant='default'
            size='md'
            className='font-bold'
          >
            {' '}
            Enviar
          </Buttom>
        </div>
      </div>
    </form>
  );
}
