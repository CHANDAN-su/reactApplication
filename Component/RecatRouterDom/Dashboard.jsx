import React from 'react'
import { Link, Outlet,useNavigate, useLoaderData } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const GotoHome = () => {
        navigate("/")
    }

    const data = useLoaderData();

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
        <p>{data.name}</p>
        <p>{data.phone}</p>

        <Outlet/>

    </div>
  )
}

export default Dashboard