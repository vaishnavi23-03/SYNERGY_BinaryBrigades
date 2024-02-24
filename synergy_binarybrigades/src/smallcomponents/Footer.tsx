import { SiYourtraveldottv } from "react-icons/si";

export default function Footer(){
    return(
        <>
<footer className="flex flex-column footer ml-2 items-center bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 rounded-md mb-2 p-4 border-2xl text-neutral-content">
  <aside className="items-center grid-flow-col">
  <SiYourtraveldottv className="text-white text-2xl ml-4 w-20 h-7 mt-" /> 
    <p className="text-white">Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav className="flex flex-column align-items-end text-white justify-end items-end wmax">
    <i className="fa fa-envelope fa-2x m-2"></i>
    <i className="fa fa-phone fa-2x m-2"></i>
    <i className="fa fa-location-dot fa-2x m-2"></i>
  </nav>
</footer>
        </>
    )
}

