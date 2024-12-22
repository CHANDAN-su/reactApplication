import React from 'react'
import {  Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => {
    return(
    <>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page</p>
    </>
    )
}

const User = () => {
    const {id} = useParams();
    return <h2>User post id: {id}</h2>
}

function Dynamicroute() {
  return (
    <>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="post/1">Post first</Link>
                    </li>
                    <li>
                        <Link to="post/2">Post second</Link>
                    </li>
                </ul>
            </nav>
        </div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/post/:id' element={<User/>} />
                </Routes>
    </>
  )
}

export default Dynamicroute