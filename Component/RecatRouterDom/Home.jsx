import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
    </nav>
        <h1>Home Page</h1>

        <Outlet/>        
    </>
  )
}

export default Home