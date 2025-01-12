import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate, useLocation } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const NavigateWithState = () => {
        navigate("/details", {
            state: {message: "Welcoms home page", timestamp: Date.now()}
        })
    }
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={NavigateWithState}>Go to Details with State</button>
        </>
    )
}

const About = () => {
    return (
        <>
            <h1>About Page</h1>
        </>
    )
}

const Details = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {state} = location || {};
    const {message, timestamp} = state || {};

    return (
        <>
            <h1>Details Page</h1>
            {message ? (
                <p>Messge: {message} <br />
                Timestam: {new Date(timestamp).toLocaleDateString()}
                </p>                
            ) : (
                <p>No state was passed to this page</p>
            )}
            <button onClick={() => navigate("/")}>Go Back to home</button>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/details",
        element: <Details/>
    }
]);

function UseLocation() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default UseLocation