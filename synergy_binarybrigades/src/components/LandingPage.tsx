import "../App.css";
import Sidebar from "@/smallcomponents/Sidebar";
import MapCanvas from "./MapCanvas";
import { BentoGridDemo } from "./bento";

function LandingPage() {
  return (
    <>
      <div className="flex flex-column hvh">
        <div className="flex flex-column">
          <Sidebar />
        </div>
        <div className="w-full">
        <div className="wmax">
          <div className="flex justify-center items-center wmax bg-gray-200 h-20 rounded-md m-2 flex-column">
            <div className="basis-1/2 pl-5 flex flex-column">
              <div className="basis-3/4">
                <p className="font-medium text-xl">Source</p>
                <input
                  type="text"
                  placeholder="enter source..."
                  className="h-10 rounded-md w-full"
                ></input>
              </div>
              <div className="basis-1/4 ml-3 mt-3">
                <i className="fa fa-map-location-dot fa-3x"></i>
              </div>
            </div>
            <div className="basis-1/2 pl-5 flex flex-column ">
              <div className="basis-3/4">
                <p className="font-medium text-xl">Destination</p>
                <input
                  type="text"
                  placeholder="enter destination..."
                  className="h-10 rounded-md w-full"
                ></input>
              </div>
              <div className="basis-1/4 ml-3 mt-3">
                <i className="fa fa-map-pin fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="hmax wmax bg-gray-200 rounded-md border-2 m-2 mt-3">
            <BentoGridDemo/>
        </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
