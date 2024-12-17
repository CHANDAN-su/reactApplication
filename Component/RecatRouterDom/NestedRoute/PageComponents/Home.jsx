import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <h3>This is Home Page</h3>
    <ul>
      <li>
        <Link to="dashboard">Dashboard</Link>
      </li>
    </ul>
      
    </>
  )
}

export default Home