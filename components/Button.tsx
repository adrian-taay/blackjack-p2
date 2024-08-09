import clsx from 'clsx';
import React from 'react'
import { Btn } from '@/types';

function Button({ settings }: { settings: Btn}) {
  const { btnIcon, btnName, color, action } = settings;

  return (
    <div className={clsx('flex', 'flex-col', 'lg:flex-row', 'justify-center', 'items-center', 'gap-1', color, 'px-2', 'lg:px-8', 'py-2',  'cursor-pointer', 'text-xs', 'text-center', 'text-white', 'font-bold', 'rounded-lg', 'shadow-lg')}>
      <span>{btnIcon}</span>
      <span>{btnName}</span>
    </div>
  )
}

export default Button