import React from 'react'
import { createBrowserRouter, RouterProvider, useMatch, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to home page</p>

            <nav>
                <ul>
                <Link to="/">Home</Link> | <Link to="profile/123">Profile</Link> | {" "}
                <Link to="/settings">Settings</Link>
                </ul>
            </nav>
        </>
    )
}

const Profile = () => {

    const match = useMatch("/profile/:userId");

    return (
        <>
            <h1>Profile Page</h1>
            {match ?
            <   p>User ID {match.params.userId}</p>
              :
              <p>No user ID found in the URL</p>
              }
        </>
    )
}

const Settings = () => {
    const match = useMatch("//settings")
    return (
        <>
            <h1>Settings Page</h1>
            <p>{match ? 
                <p>The URL matches the "/settings" route.</p> : 
                <p>The URL does not match "/settings"</p>}</p>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/profile/:userId",
        element: <Profile/>
    },
    {
        path: "/settings",
        element: <Settings/>
    }
]);

function UseMatch() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default UseMatch