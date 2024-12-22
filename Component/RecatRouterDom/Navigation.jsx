import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Navigation() {

    const Navigate = useNavigate();

    const Godashboard = () => {
        Navigate("/dashboard");
    }

  return (
    <>
        <nav style={{backgroundColor: "black", color: "white", paddingBlock: "20px"}}>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link>
            <button onClick={Godashboard}>Go to Dashboard</button>
        </nav>
    </>
  )
}

export default Navigation