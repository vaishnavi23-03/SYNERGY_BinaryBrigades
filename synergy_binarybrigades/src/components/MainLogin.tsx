import '../App.css'
import LoginSelector from '@/smallcomponents/LoginSelector'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from './LandingPage';
import { BentoGridDemo } from './bento';


function MainLogin(){
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<LoginSelector/>}/>
                <Route path='/loginpage' element={<LoginPage/>}/>
                <Route path='/signuppage' element={<SignupPage/>}/>
                <Route path='/landingpage' element={<LandingPage/>}/>
                <Route path='/landingpage/dashboard' element={<BentoGridDemo/>}/>
            </Routes>
        </Router>
            
            
        </>
    )
}
export default MainLogin