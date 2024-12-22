import React from 'react'
import { Link, Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <Link to="profile">Profile</Link> */}
                        <NavLink to="profile" className={({isActive}) => (isActive? "active": "")}>Profile</NavLink>
                    </li>
                    <li>
                        {/* <Link to="settings">Settings</Link> */}
                        <NavLink to="settings" className={({isActive}) => (isActive? "active": "")}>Settings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet/>
    </>
  )
}

export default Dashboard