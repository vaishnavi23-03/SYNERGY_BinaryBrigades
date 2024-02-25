import React from 'react';
import signInImage from "@/assets/signInImage.jpg";
import { Link } from "react-router-dom";
import "@/components/SignIn2.css"

export default function SignIn2() {
    const backgroundStyle = {
        backgroundImage: `url(${signInImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '8px',
      };
      
  return (
    <div className=' logincontainer m-0 p-0 overflow-hidden'>
    
    <div style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
      <div style={{ flex: 1, height: '100vh', width: "77vw" }}>
        {/* Image to the left */}
        <div style={{...backgroundStyle}} className='w-screen h-screen' >
            <p className='plogo flex text-7xl bg-gradient-to-r from-blue-600 via-green-600 to-indigo-500 text-transparent bg-clip-text'>Green Routes</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        {/* Form to the right */}
        <div className=" max-w-xs w-screen h-max p-0 ">
          <form className="shadow-md rounded text-center px-8 pt-6 pb-8 mb-4 mt-3 w-screen" style={{ backgroundColor: "#0b0f33", height: '100vh', width: "50vw" }}>
            <p className='ptext text-white'>Nice To Have You Back!</p>
            <div className="formbox mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input style={{ width: '50%'}}
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="formbox mt-10 mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input style={{ width: '50%'}}
                className="shadow appearance-none border border-red-500 rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder=""
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="formbox p-10 mt-8 flex items-center justify-between">
              <Link to={'/landingpage'}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </Link>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className='text-white'>
                Don't have an account? 
                <Link to={'/main'}>
                <a className="signup" href='/'>Sign Up</a>
                </Link>
            </div>
          </form>
          
        </div>
      </div>
    </div>
        
    </div>
  );
}