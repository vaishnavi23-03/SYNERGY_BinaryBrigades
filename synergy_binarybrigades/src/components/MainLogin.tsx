import '../App.css'
import LoginSelector from '@/smallcomponents/LoginSelector'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import { useState } from 'react';
import MainDash from '@/smallcomponents/MainDash'
import MainStations from '@/smallcomponents/MainStations';

function MainLogin(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<LoginSelector/>}/>
                <Route path='/loginpage' element={<LoginPage/>}/>
                <Route path='/signuppage' element={<SignupPage/>}/>
                <Route path='/landingpage' element={<LandingPage/>}/>
                <Route path='/dashboard' element={<MainDash/>}/>
                <Route path='/stations' element={<MainStations/>}/>
            </Routes>
        </Router>
            
            
        </>
    )
}
export default MainLogin