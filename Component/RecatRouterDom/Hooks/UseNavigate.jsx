import React from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const Home = () => {

    const negative = useNavigate();

    const getAbut = () => {
        negative("/about");
    }

    const getProfile = () => {
        
        negative("/profile", {state: {from: "home"}});

    }

    return (
        <>
            <div>
                <h1>Home page</h1>
                <button onClick={getAbut}>Go to About</button>
                <button onClick={getProfile}>Go to Profile</button>
            </div>
        </>
    )
}

const About = () => {
    const negative = useNavigate();

    const getHome = () => {
        negative("/");
    }
    
    return (
        <>
         <div>
            <h1>About Page</h1>
            <button onClick={getHome}>Got to Home</button>
         </div>
        </>
    )
}

const Profile = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <>
            <h1>Profile Page</h1>
            <p>This is Profile</p>
        </>
    )
}

function UseNavigate() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </>
  )
}

export default UseNavigate