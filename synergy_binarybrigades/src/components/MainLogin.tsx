import '../App.css'
import LoginSelector from '@/smallcomponents/LoginSelector'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import { BentoGridDemo } from './bento';
import { useState } from 'react';
import MainDash from '@/smallcomponents/MainDash'

function MainLogin(){
    const [dash, setDash] = useState(false)
    const changeDash = () => {

    }

    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<LoginSelector/>}/>
                <Route path='/loginpage' element={<LoginPage/>}/>
                <Route path='/signuppage' element={<SignupPage/>}/>
                <Route path='/landingpage' element={<LandingPage changeDash={changeDash}/>}/>
                <Route path='/dashboard' element={<MainDash/>}/>
            </Routes>
        </Router>
            
            
        </>
    )
}
export default MainLogin