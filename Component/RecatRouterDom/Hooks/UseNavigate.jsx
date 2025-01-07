import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

const Home = () => {

    const negative = useNavigate();

    const getAbut = () => {
        negative("/about");
    }

    return (
        <>
            <div>
                <h1>Home page</h1>
                <button onClick={getAbut}>Go to about</button>
            </div>
        </>
    )
}

const About = () => {
    const negative = useNavigate();

    const getHome = () => {
        negative("/")
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

function UseNavigate() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
    </>
  )
}

export default UseNavigate