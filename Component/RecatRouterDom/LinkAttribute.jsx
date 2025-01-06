import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is home page</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is profile page</p>
        </div>
    )
}

function LinkAttribute() {
  return (
    <>

        <nav>
            <ul>
                <li>
                    {/* Normal Link */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Link with replace */}
                    <Link to="profile" replace={true}>Profile</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </>
  )
}

export default LinkAttribute