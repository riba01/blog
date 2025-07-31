'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Buttom } from '../../Buttom';
import { InputCheckbox } from '../../InputCheckbox';
import { InputText } from '../../InputText';
import { MarkdownEditor } from '../../MarkdownEditor';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
    <form action={''} className='mb-16'>
      <div
        className={clsx(
          'flex flex-col',
          'my-8 items-start justify-start gap-4',
        )}
      >
        <InputText placeholder='Digite o seu nome' labelText='Nome' />
        <InputText placeholder='Digite o seu sobrenome' labelText='Sobrenome' />
        <InputCheckbox labelText={'M'} />
        <MarkdownEditor
          labelText='Conteúdo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        />
        <InputText
          placeholder='Digite o seu sobrenome'
          labelText='Idade'
          readOnly
          defaultValue={'Olá Mundo'}
        />
        <InputText
          placeholder='Digite o seu sobrenome'
          labelText='Idade'
          disabled
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
