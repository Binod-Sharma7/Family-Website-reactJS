
import React from 'react'

export default function Cardselements(props) {
    // console.log(props.nam);
  return (
    <div className='flex flex-col justify-between h-full'>
        <div>
      <h1 className=' text-black flex items-center justify-center font-semibold bg-white h-10 w-10 rounded-full p-2'>{props.num}</h1>
      </div>
      <div>
        <p>{props.des}</p>
        <h1 style={{backgroundColor:props.color}} className='mt-2 font-bold text-4xl  rounded-2xl text-center pb-2'>{props.nam}</h1>

      </div>
    </div>
  )
}
