import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate, Link } from "react-router-dom";

const Home =() => {
    const navigate = useNavigate();

    const gotoAbout = () => {
        navigate("/about")
    }

    const gotocontact = () => {
        navigate("/contact");
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={gotoAbout}>Go to About</button>
            <button onClick={gotocontact}>Go to Contact</button>
        </>
    )
}


const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>About Page</h1>
            <button onClick={() => navigate("/")}>Go to Home</button>
            <button onClick={() => navigate("/contact")}>Go to Contact</button>
        </>
    )
}

const Contact = () => {
    return (
        <>
            <h1>Contact Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
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
]);

function useNavtigate() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default useNavtigate