import React from 'react'

function Meetings({title, time}) {
  return (
    <div>
        <button className='border-2 shadow-xl border-gray-100 rounded-2xl w-[100%] pt-7 pb-7 flex items-center justify-start gap-3 cursor-pointer'>
            <p className='pl-2'>{time}</p>{title}</button>
    </div>
  )
}

export default Meetings