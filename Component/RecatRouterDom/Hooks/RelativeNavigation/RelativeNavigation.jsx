import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "../RelativeNavigation/Home";
import About from "../RelativeNavigation/About";
import Dashboard from "../RelativeNavigation/Dashboard";
import Profile from "../RelativeNavigation/Profile";
import Settings from "../RelativeNavigation/Settings";

function RelativeNavigation() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                {/* navigate("./next"): This navigates to a path relative to the current URL. */}
                    <Link to="./about">About</Link>
                </li>
                <li>
                    <Link to="dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/dashboard/*' element={<Dashboard/>}>
                <Route path='profile' element={<Profile/>} />
                <Route path='settings' element={<Settings/>} />
            </Route>
        </Routes>
    </>
  )
}

export default RelativeNavigation