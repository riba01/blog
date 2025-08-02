'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { PublicPost } from '../../../dto/post/dto';
import { Buttom } from '../../Buttom';
import { InputCheckbox } from '../../InputCheckbox';
import { InputText } from '../../InputText';
import { MarkdownEditor } from '../../MarkdownEditor';
import { ImageUploader } from '../ImageUpLoarder';

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || '');
  return (
    <form action={''} className='mb-16'>
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
          defaultValue={publicPost?.id || ''}
          readOnly
        />
        <InputText
          placeholder='Slug gerada automaticamente'
          labelText='Slug'
          name='slug'
          type='text'
          defaultValue={publicPost?.slug || ''}
          readOnly
        />
        <InputText
          placeholder='Digite o nome do autor do post'
          labelText='Autor'
          name='author'
          type='text'
          defaultValue={publicPost?.author || ''}
        />
        <InputText
          placeholder='Digite o título do texto'
          labelText='Título'
          name='title'
          type='text'
          defaultValue={publicPost?.title || ''}
        />
        <InputText
          placeholder='Digite o resumo do post'
          labelText='Resumo'
          name='excerpt'
          type='text'
          defaultValue={publicPost?.excerpt || ''}
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
          defaultValue={publicPost?.coverImageUrl || ''}
        />

        <InputCheckbox
          labelText={'Publicar?'}
          name='publish'
          defaultChecked={publicPost?.published}
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
