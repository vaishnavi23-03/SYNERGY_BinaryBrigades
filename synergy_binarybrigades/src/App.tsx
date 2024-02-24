import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DemoSidebar from './components/SideBar1/sidebar';
import Navigation from './components/Navigation';
import { ThreeDCardDemo } from './components/Card';
import Review from './Review';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="headersection flex">
        {/* <DemoSidebar /> */}
        <Routes>
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  {/* <div className='flex flex-col'>
    <div className='flex ml-4vw justify-center items-center gap-10'>
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
    </div>
    <div className='flex ml-4vw justify-center items-center gap-10'>
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
    </div>
  </div> */}