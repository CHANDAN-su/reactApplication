import React from 'react'
import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
        <div>
            <h3>Dashboard Layout</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet/>
        </div>
    </>
  )
}

export default DashboardLayout