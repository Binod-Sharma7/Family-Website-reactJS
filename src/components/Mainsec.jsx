import React from 'react'
import Mainleft from './Mainleft'
import Mainright from './Mainright'

export default function Mainsec() {
  return (
    <div className='mt-10 flex  h-[80vh] justify-between mx-8 '> 
      <Mainleft />
      <Mainright/>
    </div>
  )
}
