import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

  return (
    <>
        <div>
            <h1>Dashboard</h1>
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

            <button onClick={() => navigate("settings")}>Go to settinf</button>

            <Outlet/>
        </div>
    </>
  )
}

export default Dashboard