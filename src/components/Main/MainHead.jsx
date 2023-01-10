import React from 'react'
import {BsArrowDownUp} from 'react-icons/bs'

const MainHead = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <p className='text-2xl font-semibold'>Photography /<span className='text-slate-400 p-1'>Premium Photos</span> </p>
      </div>
      <div className='flex relative'>
        <BsArrowDownUp className='absolute top-1 -left-7' />
        <p>Sort by</p>
      </div>
    </div>
  )
}

export default MainHead