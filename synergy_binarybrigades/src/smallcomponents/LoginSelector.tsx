import "../App.css";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";

function LoginSelector() {
  return (
    <>
          <div className="flex justify-center items-center wmax h-20 shadow-md mb-7 rounded-md">
            <div className="flex basis-1/4 align-center">
              <img src="" width={30} height={30}></img>
            </div>
            <div className="flex flex-column basis-2/4 justify-center items-center">
              <p className="font-medium text-5xl">Smart Charge.io</p>
            </div>
            <div className="flex basis-1/4 align-center">
              <p>
                plan out your journey beforehand and never suffer from range
                anxiety again!!
              </p>
            </div>
          </div>
          <div className="flex wmax justify-center items-center">
            <div className="flex justify-center items-center w-64 h-20">
              <div className="flex basis-1/2 bg-green-200 mr-3 rounded-xl p-4 justify-center items-center shadow-md">
              <Link to={'/loginpage'}>
                <button className="btn">Login</button>
              </Link>
              </div>
              <div className="flex basis-1/2 bg-green-200 ml-3 rounded-xl p-4 justify-center items-center shadow-md">
              <Link to={'/signuppage'}>
                <button className="btn">Signup</button>
              </Link>
              </div>
            </div>
          </div>
    </>
  );
}

export default LoginSelector;
