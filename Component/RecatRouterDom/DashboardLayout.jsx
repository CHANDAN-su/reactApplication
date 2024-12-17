import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Profile from "../RecatRouterDom/Profile";
import Settings from "../RecatRouterDom/Settings";

function DashboardLayout() {
  return (
    <>
    <h1>DashboardLayout layout</h1>
        <nav>
            <ul>
                <li>
                    <Link to="profile">Profile</Link>
                </li>
                <li>
                    <Link to="setting">Settings</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path="profile" element={<Profile/>}/>
                <Route path="setting" element={<Settings/>}/>
            </Routes>
        </div>
    </>
  )
}

export default DashboardLayout