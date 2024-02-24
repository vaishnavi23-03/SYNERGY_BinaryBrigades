import React from 'react'
import { ThreeDCardDemo } from './components/Card'

export default function Review() {
  return (
    <div>
      <div className='flex flex-col'>
          <div className='flex ml-4vw justify-center items-center gap-10'>
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            
          </div>
          <div className='flex mt-2 ml-4vw justify-center items-center gap-10'>
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            
          </div>
        </div>
    </div>
  )
}
