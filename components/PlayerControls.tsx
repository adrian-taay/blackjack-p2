import React from 'react'
import Button from './Button'
import { Btn } from '@/types';
import { CirclePlus, Handshake, ThumbsUp } from 'lucide-react';

function PlayerControls() {
  const BetAmount = (<span className='bg-white/60 px-6 py-2 rounded-lg'>Php 1,000</span>)

  const HitBtn: Btn = {
    btnIcon: <CirclePlus />,
    btnName: 'Hit',
    color: 'bg-yellow-500',
    action: ''
  };

  const StandBtn: Btn = {
    btnIcon: <ThumbsUp />,
    btnName: 'Stand',
    color: 'bg-yellow-500',
    action: ''
  }

  const DealBtn: Btn = {
    btnIcon: <Handshake />,
    btnName: 'Deal',
    color: 'bg-neutral-700',
    action: ''
  }

  return (
    <div className='flex justify-center items-center gap-8'>
      <div className='w-16 grow-0 shrink-0 text-center'>
        <Button settings={HitBtn} />
      </div>
      <div className='flex flex-col items-center gap-4'>
        {BetAmount}
        <span className='w-16 grow-0 shrink-0 text-center'><Button settings={DealBtn} /></span>
      </div>
      <div className='w-16 grow-0 shrink-0 text-center'><Button settings={StandBtn} /></div>
    </div>
  )
}

export default PlayerControls