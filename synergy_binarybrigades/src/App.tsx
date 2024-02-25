import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from './components/Welcome';
import SignIn2 from './components/SignIn2';
import SignUp2 from './components/Signup';
import LandingPage from './components/LandingPage';
import MainDash from './smallcomponents/MainDash';
import MainStations from './smallcomponents/MainStations';


function App() {
  return (
    <>
      <Router>
        <div className="content-container">
          <div className="headersection flex">
            <Routes>
          <Route path="/" element={<Welcome />} />
              <Route path="/signup" element={<SignUp2 />} />
              <Route path="/login" element={<SignIn2 />} />
              <Route path="/landingpage" element={<LandingPage/>} />
              <Route path='/landingpage' element={<LandingPage/>}/>
              <Route path='/dashboard' element={<MainDash/>}/>
              <Route path='/stations' element={<MainStations/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
