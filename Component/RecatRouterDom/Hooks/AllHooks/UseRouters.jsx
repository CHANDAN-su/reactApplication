import React from 'react'
import { useRoutes, Navigate, Link, useParams } from "react-router-dom";


const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to home page</p>
            <Link to="about">Go to About</Link>
        </>
    )
}

const About = () => {
    return (
        <>
            <h1>About Page</h1>
            <p>Welcomr to about page</p>
        </>
    )
}

const Profile = () => {
    const { username } = useParams();
    return (
        <>
            <h1>Profile Page</h1>
            <p>UserName: {username}</p>
        </>
    )
}

const NotFound = () => {
    return (
        <>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">Go to Home</Link>
            </div>
        </>
    )
}

function UseRouters() {
    const routers = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        {
            path: "/profile/:username",
            element: <Profile />
        },
        { path: "/404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
    ]);


    return routers
}

export default UseRouters