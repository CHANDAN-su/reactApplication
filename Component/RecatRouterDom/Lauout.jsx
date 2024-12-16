import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "../RecatRouterDom/Dashboard";
import Profile from "../RecatRouterDom/Profile";
import Settings from "../RecatRouterDom/Settings";

function Lauout() {
  return (
    <>
        <div>
            <h1>My app</h1>
            <ul>
                <li><Link to="dashboard">Dashboard</Link></li>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="setting">Setting</Link></li>
                
            </ul>
        </div>
        <div>
            <Routes>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='profile' element={<Profile />}/>
                <Route path='setting' element={<Settings />}/>
            </Routes>
        </div>
    </>
  )
}

export default Lauout