import React from 'react'
import { Link, Routes, Route  } from "react-router-dom";
import Profile from "../RecatRouterDom/Profile";
import Settings from "../RecatRouterDom/Settings";

function DashboardNestedRoute() {
  return (
    <>
      <div>
        <h1>Dashboard Nested Route Page</h1>
        <nav>
            <ul>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="setting">Settings</Link></li>
                
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path="profile" element={< Profile />} />
                <Route path="setting" element={<Settings/>} />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default DashboardNestedRoute