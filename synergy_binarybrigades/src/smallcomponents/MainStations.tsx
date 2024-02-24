import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { SiYourtraveldottv } from "react-icons/si";
import { ThreeDCardDemo } from "@/components/Card";

function MainStations(){
    return(
        <>
        <div className="flex flex-column hvh ml-64">
        <div className="flex flex-column">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="wmax">
            <div className="flex ml-2 p-5 justify-between items-center wmax bg-gradient-to-r from-blue-800 via-indigo-900 to-indigo-900 h-20 rounded-md m-2 flex-column">
              {/* Source */}
              <div className="w-1/2 flex items-center">
                <div className="relative m-3 flex items-center">
                  <div className="mr-2">
                    <i className="fa fa-map-location-dot fa-2x text-white"></i>
                  </div>
                  <label htmlFor="source" className="text-white text-sm">
                    Source
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="source"
                    type="text"
                    placeholder="Enter source..."
                    className="h-10 rounded-md w-60 pl-2 border focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
 
              {/* Destination */}
              <div className="w-1/2 ml-0 flex items-center">
                <div className="relative m-3 flex items-center">
                  <div className="mr-2">
                    <i className="fa fa-map-pin fa-2x text-white"></i>
                  </div>
                  <label htmlFor="destination" className="text-white text-sm">
                    Destination
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter destination..."
                    className="h-10 rounded-md w-60 pl-2 border focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="justify-center items-center mr-10 ml-2">
                <button className="btn bg-blue-600 text-white p-2 rounded-md font-medium">Enter</button>
              </div>
 
              {/* Logo and Company Name */}
              <div className="flex items-center flex-row-reverse"> {/* Updated class: flex-row-reverse */}
                <SiYourtraveldottv className="text-white text-3xl mr-2" /> {/* Increased size */}
                <a className="text-white text-lg">GreenRoutes</a>
              </div>
            </div>
          </div>
          <div className="hmax wmax rounded-md m-2 mt-3">
            <ThreeDCardDemo/>
          </div>
          <div className="wmax h-64 mt-16">
          <Footer/>
          </div>
        </div>
      </div>
        </>
    )
}

export default MainStations