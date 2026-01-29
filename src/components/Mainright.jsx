import React from 'react'
import Cards from './Cards'
import { people } from './data.jsx'


export default function Mainright() {
  
  return (
    <div className='w-2/3'>
      <div className='flex gap-17 h-full overflow-x-auto hide-scrollbar py-2'>
         {people.map((item,index) => (
        <Cards
          id={item.id}
          name={item.name}
          description={item.description}
          img={item.img}
          color={item.color}
          
        />
      ))  }
        
      </div>
    </div>
  )
}
