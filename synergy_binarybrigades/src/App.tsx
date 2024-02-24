import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoSidebar from './components/SideBar1/sidebar'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="headersection flex-1 max-w-10">
    <div>
      <Navigation/>
      </div>
      <div>
      <DemoSidebar/>
      </div>
      
    </div>
    </>
  )
}

export default App
