import React from 'react'
import { ArrowUpRight } from "lucide-react";

export default function Mainleft() {
  return (


    <div className=' flex flex-col justify-between w-2/5'>
      <div>
        <h1 className='font-bold text-6xl mb-7'>The <br /> Heart <br /> Of Our Family</h1>
        <p className='text-xl mt-10'>This website represents our small and loving family  Father, Mother, Brother, and Me.
Built on care, respect, and togetherness, we grow stronger every day.
A simple space that reflects who we are as a family.</p>
      </div>
      <div className="w-20 mb-3 h-20 flex items-center justify-center">
        <ArrowUpRight className="w-full h-full cursor-pointer" />
      </div>


    </div>


  )
}
