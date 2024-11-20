import React from 'react'
import { Link, Outlet,useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const GotoHome = () => {
        navigate("/")
    }

  return (
    <div>
        <h1>Dashboard</h1>

        <ul>
            <li>
                <Link to="profile">Profile</Link>
            </li>
            <li>
                <Link to="settings">Settings</Link>
            </li>
        </ul>

        <button onClick={GotoHome}>Go to About Page</button>

        <Outlet/>

    </div>
  )
}

export default Dashboard