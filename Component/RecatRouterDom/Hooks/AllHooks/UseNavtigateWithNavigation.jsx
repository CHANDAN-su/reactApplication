import React from 'react'
import { createBrowserRouter, RouterProvider, Link, useNavigate, useLocation } from 'react-router-dom'

const Home = () => {

        const navigate = useNavigate();

    const handleReplaceHistory = () => {
        navigate("/about", {replace: true})
    }
    const handleWithState = () => {
        navigate("/contact" , {
            state: {
                from: "Home Page",
                message: "Hello from Home!"
            }
        })
    }
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to home page</p>
            <nav>
                <Link to="/">Home</Link> | <Link to="about">About</Link> | <Link to="contact">Contact</Link>
            </nav>
            <div>
                <button onClick={handleReplaceHistory}>Go to About (replace history)</button>
                <button onClick={handleWithState}>Go to Contact (With State)</button>
            </div>
        </>
    )
}

const About = () => {
    const navigate = useNavigate();


    const handleGoBack = () => {
        navigate(-2)
    }
    return (
        <>
            <h1>About Page</h1>
            <button onClick={handleGoBack}>Got Back</button>
        </>
    )
}

const Contact = () => {
    const location = useLocation();

    const {from, message} = location.state || {}
    return (
        <>
            <h1>Contact Page</h1>
            {from && message ? <p>Navigated from: {from} <br/> Message: {message} </p> :  <p>No state was passed to this page.</p> }
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
        path: "/contact",
        element: <Contact/>
    }
])

function UseNavtigateWithNavigation() {
  return (
    <>  
        <RouterProvider router={router} />
    </>
  )
}

export default UseNavtigateWithNavigation