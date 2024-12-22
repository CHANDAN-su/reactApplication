import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
        <div>
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
        </div>
        <Outlet/>
    </>
  )
}

export default Dashboard