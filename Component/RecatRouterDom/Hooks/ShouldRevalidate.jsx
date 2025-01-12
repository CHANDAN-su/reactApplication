import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

const Home = () => {
    return (

        <div>
            <h1>This is Home Page</h1>
        </div>
    )
}

const HomePage = () => {
   return ( <>
        <h1>HomePage</h1>
        <p>This is homepage</p>
    </>
    )
}

const Dashboard = () => {
    return (
        <>
            <h1>This is dasjboard page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Go to Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

const Profile = () => <h1>This is profile page</h1>;

const FetchData = async () => {
    console.log("Fetching data for Profile...");;
    return {
        name: "Chandan Thakur",
        age: 20
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        id: "homeRoute",
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "profile",
                element: <Profile />,
                loader: FetchData,
                shouldRevalidate: ({ currentUrl, nextUrl, defaultShouldRevalidate }) => {
                    console.log("Current Url:", currentUrl.pathname);
                    console.log("Next Url:", nextUrl.pathname);

                    if (currentUrl.pathname.startsWith("/dashboard") && nextUrl.pathname.startsWith("/dashboard")) {
                        console.log("Skipping revalidation.");
                        return false;
                    }
                }
            }
        ],
        // Defaults to false
        caseSensitive: false
    }
])

function ShouldRevalidate() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default ShouldRevalidate