import React from 'react'
import { NavBar } from "react-router-dom";

function About() {
  return (
    <>
    <nav>
    <ul>
            <li><NavBar to="/">Home</NavBar></li>
            <li><NavBar to="/about">About</NavBar></li>
        </ul>
    </nav>
        <h1>About Page</h1>
    </>
  )
}

export default About