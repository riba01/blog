import clsx from 'clsx';
import { Buttom } from '../../../../components/Buttom';
import { InputCheckbox } from '../../../../components/InputCheckbox';
import { InputText } from '../../../../components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl'>Admin New Post Page</h1>
      </div>
      <form action={''} className='mb-16'>
        <div
          className={clsx(
            'flex flex-col',
            'my-8 items-start justify-start gap-4',
          )}
        >
          <InputText placeholder='Digite o seu nome' labelText='Nome' />
          <InputText
            placeholder='Digite o seu sobrenome'
            labelText='Sobrenome'
          />
          <InputCheckbox labelText={'M'} />
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
    </>
  );
}
