'use client';

import clsx from 'clsx';

type DialogProps = {
  title: string;
  content: React.ReactNode;
  isVisible?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  disabled: boolean;
};

export function Dialog({
  title,
  content,
  isVisible = false,
  onClose,
  onConfirm,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;
    onClose();
  }

  return (
    <div
      //'top-0 bottom-0 left-0 right-0' pode ser substituido por inset-0
      className={clsx(
        'fixed bg-black/50 text-white backdrop-blur-[1.5px]',
        'inset-0',
        'flex items-center justify-center',
        'z-50 p-6',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'bg-slate-400 text-slate-700 p-6 rounded-2xl',
          'max-w-2xl',
          'flex flex-col gap-6',
          'shadow-lg shadow-gray-700',
        )}
        role='dialog'
        aria-modal={true}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
        onClick={e => e.stopPropagation()}
      >
        <h3 id='dialog-title' className='text-center font-bold text-xl'>
          {title}
        </h3>
        <div id='dialog-description' className='text-justify mb-4'>
          {content}
        </div>
        <div className={clsx('flex flex-row itens-center justify-around')}>
          <button
            className={clsx(
              'flex items-center justify-center',
              'bg-slate-300 text-slate-900',
              'px-4 py-2 rounded-lg',
              'hover:bg-slate-500 transition',
              'cursor-pointer',
            )}
            autoFocus
            onClick={onClose}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              'flex items-center justify-center',
              'bg-blue-500 text-blue-50',
              'px-4 py-2 rounded-lg',
              'hover:bg-blue-600 transition',
              'cursor-pointer',
              'disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed',
            )}
            onClick={onConfirm}
            disabled={disabled}
            aria-label='Confirmar exclusão'
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
