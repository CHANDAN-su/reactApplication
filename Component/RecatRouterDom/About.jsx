import React from 'react'
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
    <nav>
    <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
        <h1>About Page</h1>
    </>
  )
}

export default About