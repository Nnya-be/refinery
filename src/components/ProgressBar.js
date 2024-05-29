import React from 'react'

function ProgressBar() {
  return (
    <div className='text-slate-950 w-full h-max'>
        <div className=' flex flex-row justify-between text-2xl py-2'>
            <span className='inline' >Marketing Online</span>
            <span className='inline' >90%</span>
        </div>
        <div className=' w-full bg-slate-200 h-2 rounded-xl'>
            <div className='bg-gradient-to-r from-amber-200 to-amber-700 h-full w-5/6 rounded-l-xl '></div>
        </div>
    </div>
  )
}

export default ProgressBar