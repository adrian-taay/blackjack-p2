import { RectangleVertical } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <section className='relative flex justify-center items-center py-1 text-white'>
      <h1 className='font-extrabold text-xl text-center items-center tracking-widest px-2'>BLΛƆK JΛƆK</h1>
      <span className='absolute right-3 flex items-center gap-1'>
        52 <RectangleVertical size={18} />
      </span>
    </section>
  )
}

export default Header