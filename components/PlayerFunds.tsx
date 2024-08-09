import React from 'react'
import { Chip } from '@/types'
import clsx from 'clsx'

function PlayerFunds() {
  const chips: Chip[] = [
    {
      value: 1,
      color: 'bg-gray-500'
    },
    {
      value: 5,
      color: 'bg-green-500'
    },
    {
      value: 10,
      color: 'bg-amber-700'
    },
    {
      value: 20,
      color: 'bg-orange-500'
    },
    {
      value: 50,
      color: 'bg-red-500'
    },
    {
      value: 100,
      color: 'bg-purple-500'
    },
    {
      value: 500,
      color: 'bg-yellow-500'
    },
    {
      value: 1000,
      color: 'bg-blue-500'
    },
  ]

  const ChipsDisplay = (<div className='grid grid-cols-4 lg:grid-cols-8 gap-4'>
    {
      chips.map((chip, index) => (<span key={index} className={clsx('p-3', 'rounded-full', chip.color, 'border', 'border-white', 'font-bold', 'grow-0', 'shrink-0', 'h-16', 'w-16', 'place-content-center', 'text-center', 'shadow-lg', 'cursor-pointer')}>{chip.value}</span>))
    }
  </div>)

  const PlayerBalance = (<div className='text-center text-white font-bold bg-neutral-800 px-8 py-3 rounded-t-lg'>Balance: Php 10,000</div>)

  return (
    <div className='flex flex-col items-center gap-6'>
      {ChipsDisplay}
      {PlayerBalance}
    </div>
  )
}

export default PlayerFunds