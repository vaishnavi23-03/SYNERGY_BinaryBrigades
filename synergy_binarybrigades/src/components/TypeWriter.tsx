
"use client";
import { TypewriterEffectSmooth } from "@/components/ui/Typewriter-effect";
import "@/components/TypeWriter.css"
import { Link } from 'react-router-dom';


export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Green",
    },
    {
      text: "Routes",
    },
  ];


  
  return (
    <div>
    <div className="flex flex-col items-center justify-center h-[40rem] space-y-4 bg-indigo-800 text-white">
    <p className="twc text-4xl text-center">
      Discover the Future of <br/> Travel with <br/>
    </p>
    <TypewriterEffectSmooth className="twcontainer text-8xl" words={words} />
    <p className="pb-4 text-sm italic text-center">
      Your Gateway to the Nearest Electric Vehicle Charging Stations.
    </p>
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4">
    <Link to="/login">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
      <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
        Signup
      </button>
      </Link>
    </div>
  </div>
  </div>
  );
}