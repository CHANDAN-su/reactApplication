import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
        <nav style={{backgroundColor: "black", color: "white", paddingBlock: "20px"}}>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link>
        </nav>
    </>
  )
}

export default Navigation