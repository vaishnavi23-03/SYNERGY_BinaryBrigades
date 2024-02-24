import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";


export default function Navigation() {
  return (
    <div>
      <div className="navbar flex">
  <div className="flex gap-20">
    <div className="form-control">
      <input type="text" placeholder="Search" className="bg-white input input-bordered w-24 w-auto" />
    </div>
    <div className="form-control">
      <input type="text" placeholder="Enter Destination" className="bg-white input input-bordered w-24 w-auto" />
    </div>
  </div>
  <div className="flex-1 flex-row-reverse">
        <div className='w-[2vw] h-50' >
        <SiYourtraveldottv/>
        </div>
          <a className="btn btn-ghost text-lg">enRoute</a> {/* Adjusted the font size */}
        </div>
</div>
    </div>
  )
}



