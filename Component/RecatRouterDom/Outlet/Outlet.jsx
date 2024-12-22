import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Outlet/Component/Home";
import Dashboard from "../Outlet/Component/Dashboard";
import Profile from "../Outlet/Component/Profile";
import Settings from "../Outlet/Component/Settings";
import User from "../Outlet/Component/User";

function Outlet() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings/>} />
            <Route />
         </Route>
         <Route path="/user/:id" element={<User/>} />
      </Routes>
    </>
  );
}

export default Outlet;
