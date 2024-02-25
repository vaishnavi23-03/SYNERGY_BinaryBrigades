import React from 'react'
import WelcImg from "@/assets/WelcomeImage.jpg"
import { TypewriterEffectSmoothDemo } from '@/components/TypeWriter'
import { ParallaxScrollDemo } from '@/components/ParallexScroll'

export default function Welcome() {
  return (
	<div className='welcomepg w-full bg-indigo-800'>
	<div className='flex'>
      <TypewriterEffectSmoothDemo />
      <div className='flex-1 w-max'>
        {/* Add any additional styling or adjustments as needed */}
        <ParallaxScrollDemo />
      </div>
    </div>

	</div>
  )
}